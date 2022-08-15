import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer />
    </div>
  );
}

export default App;


// {
//   "products"= [
//         { "id": 1,
//           "title": "Monira Women's Cotton Striped Woven Traditional Saree With Blouse Piece",
//           "price":551.00,
//           "image":"https://m.media-amazon.com/images/I/614zdHWyfnL._AC_UL480_FMwebp_QL65_.jpg"
//         },
//         { "id": 2,
//         "title": "Monira Blue Cotton Printed Salwar Suit (Ready To Wear_S To 6XL-Size)(MONPDPRW1058-P)",
//         "price":499.00,
//         "image":"https://m.media-amazon.com/images/I/91n5s+BPQSL._UY879_.jpg"
//       },
//       { "id": 3,
//       "title": "Harpa Women Maxi A-Line Dress",
//       "price":729.00,
//       "image":"https://m.media-amazon.com/images/I/61XnG8ZA3lL._UX679_.jpg"
//     },
//     { "id": 4,
//     "title": "Miss Chase Women's Comfortable Round Neck Sleeveless Striped Midi Bodycon Dress with Zipper",
//     "price":551.00,
//     "image":"https://m.media-amazon.com/images/I/815nD5rD+uL._UY879_.jpg"
//   },
//   {
//       "id":5,
//       "title":"Harpa Women Dress",
//       "price":729.00,
//       "image":"https://m.media-amazon.com/images/I/71OGBZWg7DL._UY879_.jpg"
//   },
//   {
//       "id":6,
//       "title":"Harpa Women Dress",
//       "price":659.00,
//       "image":"https://m.media-amazon.com/images/I/81CvILVZL5L._UY879_.jpg"
//   },
//   {
//       "id":7,
//       "title":"Miss Chase Women's Black Designer Round Neck Cap Sleeves Lace Solid Embellished Mini Skater Dress with Zip Closure",
//       "price":946.00,
//       "image":"https://m.media-amazon.com/images/I/81elLgvQGKL._UY879_.jpg"
//   },
//   {
//       "id":8,
//       "title":"AND Women's Synthetic Mini A-Line Dress",
//       "price":999.00,
//       "image":"https://m.media-amazon.com/images/I/818Vq5MB75L._UY879_.jpg"
//   },
//   {
//       "id":9,
//       "title":"AND Women's Rayon Midi Jumpsuit",
//       "price":2394,
//       "image":"https://m.media-amazon.com/images/I/71E7vympCDL._UY879_.jpg"
//   },
//   {
//       "id":10,
//       "title":"Pashtush women Extra Fine Wool shawl, Challa Daur, With Kashmiri Embroidered Border design",
//       "price":4699,
//       "image":"https://m.media-amazon.com/images/I/81VN4umxJGL._UX679_.jpg"
//   }    
//       ]
// }