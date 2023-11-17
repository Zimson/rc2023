import ReactDOM from 'react-dom/client';

import {restaurants} from './constants/mock.ts';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(<App pageData={restaurants} />);

//   <ul id="jsx-restaurants">
//     {/* first restaurant */}
//     <li key={`jsx-${restaurants[0].id}`}>
//       <h2>{restaurants[0].name}</h2>
//       <h3>Меню:</h3>
//       <ul id={`jsx-menu-${restaurants[0].id}`}>
//         <li key={`jsx-${restaurants[0].menu[0].id}`}>
//           {restaurants[0].menu[0].name}
//         </li>
//         <li key={`jsx-${restaurants[0].menu[1].id}`}>
//           {restaurants[0].menu[1].name}
//         </li>
//         <li key={`jsx-${restaurants[0].menu[2].id}`}>
//           {restaurants[0].menu[2].name}
//         </li>
//       </ul>
//       <h3>Отзывы:</h3>
//       <ul id={`jsx-reviews-${restaurants[0].id}`}>
//         <li key={`jsx-${restaurants[0].reviews[0].id}`}>
//           {restaurants[0].reviews[0].text}
//         </li>
//         <li key={`jsx-${restaurants[0].reviews[1].id}`}>
//           {restaurants[0].reviews[1].text}
//         </li>
//       </ul>
//     </li>
//
//     {/* second restaurant */}
//     <li key={`jsx-${restaurants[1].id}`}>
//       <h2>{restaurants[1].name}</h2>
//       <h3>Меню:</h3>
//       <ul id={`jsx-menu-${restaurants[1].id}`}>
//         <li key={`jsx-${restaurants[1].menu[0].id}`}>
//           {restaurants[1].menu[0].name}
//         </li>
//         <li key={`jsx-${restaurants[1].menu[1].id}`}>
//           {restaurants[1].menu[1].name}
//         </li>
//       </ul>
//       <h3>Отзывы:</h3>
//       <ul id={`jsx-reviews-${restaurants[1].id}`}>
//         <li key={`jsx-${restaurants[1].reviews[0].id}`}>
//           {restaurants[1].reviews[0].text}
//         </li>
//         <li key={`jsx-${restaurants[1].reviews[1].id}`}>
//           {restaurants[1].reviews[1].text}
//         </li>
//         <li key={`jsx-${restaurants[1].reviews[2].id}`}>
//           {restaurants[1].reviews[2].text}
//         </li>
//       </ul>
//     </li>
//
//     {/* third restaurant */}
//     <li key={`jsx-${restaurants[2].id}`}>
//       <h2>{restaurants[2].name}</h2>
//       <h3>Меню:</h3>
//       <ul id={`jsx-menu-${restaurants[2].id}`}>
//         <li key={`jsx-${restaurants[2].menu[0].id}`}>
//           {restaurants[2].menu[0].name}
//         </li>
//         <li key={`jsx-${restaurants[2].menu[1].id}`}>
//           {restaurants[2].menu[1].name}
//         </li>
//         <li key={`jsx-${restaurants[2].menu[2].id}`}>
//           {restaurants[2].menu[2].name}
//         </li>
//       </ul>
//       <h3>Отзывы:</h3>
//       <ul id={`jsx-reviews-${restaurants[2].id}`}>
//         <li key={`jsx-${restaurants[2].reviews[0].id}`}>
//           {restaurants[2].reviews[0].text}
//         </li>
//       </ul>
//     </li>
//
//     {/* fourth restaurant */}
//     <li key={`jsx-${restaurants[3].id}`}>
//       <h2>{restaurants[3].name}</h2>
//       <h3>Меню:</h3>
//       <ul id={`jsx-menu-${restaurants[3].id}`}>
//         <li key={`jsx-${restaurants[3].menu[0].id}`}>
//           {restaurants[3].menu[0].name}
//         </li>
//         <li key={`jsx-${restaurants[3].menu[1].id}`}>
//           {restaurants[3].menu[1].name}
//         </li>
//       </ul>
//       <h3>Отзывы:</h3>
//       <ul id={`jsx-reviews-${restaurants[3].id}`}>
//         <li key={`jsx-${restaurants[3].reviews[0].id}`}>
//           {restaurants[3].reviews[0].text}
//         </li>
//         <li key={`jsx-${restaurants[3].reviews[1].id}`}>
//           {restaurants[3].reviews[1].text}
//         </li>
//       </ul>
//     </li>
//   </ul>,
// );
