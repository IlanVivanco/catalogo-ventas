const axios = require('axios');
const fs = require('fs');

const fetch_data = async () => {

   const spreadsheetID = "1skhDHfKqHerTuwyKsDjkP2f3cZ5KbIuoTMObc1T3udA";
   const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetID}/od6/public/values?alt=json`;

   try {
      const response = await axios.get(url);

      const products = response.data.feed.entry.map(el => {
         let product = {
            "publish": (el.gsx$item.$t != 'Vendido' && el.gsx$item.$t != 'Reservado'),
            "stage": el.gsx$priority.$t,
            "categories": el.gsx$category.$t.split('|'),
            "title": el.gsx$item.$t,
            "description": el.gsx$description.$t,
            "price": parseInt(el.gsx$price.$t.replace(/[\$\.,]/g, "")) / 100,
            "images": el.gsx$pics.$t.split("|")
         }

         return product;
      });

      let catalog = { catalog: products };
      let data = JSON.stringify(catalog, null, 2);
      fs.writeFileSync('src/content/catalog.json', data);

   } catch (error) {
      console.error(error)
   }
}

fetch_data();