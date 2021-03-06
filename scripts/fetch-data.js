const axios = require('axios');
const fs = require('fs');

const fetch_data = async () => {
   const spreadsheetID = "1skhDHfKqHerTuwyKsDjkP2f3cZ5KbIuoTMObc1T3udA";
   const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;

   try {
      const response = await axios.get(url);

      const products = response.data.feed.entry.map(el => {
         let product = {
            "publish": (el.gsx$status.$t == 'Publicado'),
            "stage": parseInt(el.gsx$priority.$t),
            "categories": el.gsx$category.$t.split('|'),
            "title": el.gsx$item.$t,
            "description": el.gsx$description.$t,
            "price": ( parseInt(el.gsx$priority.$t) == 1 && el.gsx$price.$t != '') ? parseInt(el.gsx$price.$t.replace(/[\$\.,]/g, "")) / 100 : null,
            "images": (el.gsx$pics.$t != '') ? el.gsx$pics.$t.split("|").map(el => `../images/catalogo/${el}.jpg`) : ['../images/placeholder.jpg']
         }

         return product;
      });

      let catalog = { catalog: products };
      let data = JSON.stringify(catalog, null, 2);

      fs.mkdirSync('src/content', { recursive: true });
      fs.writeFileSync('src/content/catalog.json', data);
   } catch (error) {
      console.error(error)
   }
}

fetch_data();