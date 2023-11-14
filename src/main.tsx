import ReactDOM from 'react-dom/client';
import React from 'react';
import {restaurants} from './constants/mock.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);

root.render(
  React.createElement('ul', {
    id: 'restaurants',
    children: [
      // first restaurant
      React.createElement('li', {
        key: restaurants[0].id,
        children: [
          React.createElement('h2', {key: restaurants[0].name, children: restaurants[0].name}),

          React.createElement('h3', {key: `menu-subtitle-${restaurants[0].id}`, children: 'Меню:'}),

          React.createElement('ul', {
            id: `menu-${restaurants[0].name}`,
            key: `menu-${restaurants[0].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[0].menu[0].id,
                children: restaurants[0].menu[0].name,
              }),
              React.createElement('li', {
                key: restaurants[0].menu[1].id,
                children: restaurants[0].menu[1].name,
              }),
              React.createElement('li', {
                key: restaurants[0].menu[2].id,
                children: restaurants[0].menu[2].name,
              }),
            ],
          }),

          React.createElement('h3', {key: `reviews-subtitle-${restaurants[0].id}`, children: 'Отзывы:'}),

          React.createElement('ul', {
            id: `reviews-${restaurants[0].name}`,
            key: `reviews-${restaurants[0].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[0].reviews[0].id,
                children: restaurants[0].reviews[0].text,
              }),
              React.createElement('li', {
                key: restaurants[0].reviews[1].id,
                children: restaurants[0].reviews[1].text,
              }),
            ],
          }),
        ],
      }),

      // second restaurant
      React.createElement('li', {
        key: restaurants[1].id,
        children: [
          React.createElement('h2', {key: restaurants[1].name, children: restaurants[1].name}),

          React.createElement('h3', {key: `menu-subtitle-${restaurants[1].id}`, children: 'Меню:'}),

          React.createElement('ul', {
            id: `menu-${restaurants[1].name}`,
            key: `menu-${restaurants[1].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[1].menu[0].id,
                children: restaurants[1].menu[0].name,
              }),
              React.createElement('li', {
                key: restaurants[1].menu[1].id,
                children: restaurants[1].menu[1].name,
              }),
            ],
          }),

          React.createElement('h3', {key: `reviews-subtitle-${restaurants[1].id}`, children: 'Отзывы:'}),

          React.createElement('ul', {
            id: `reviews-${restaurants[1].name}`,
            key: `reviews-${restaurants[1].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[1].reviews[0].id,
                children: restaurants[1].reviews[0].text,
              }),
              React.createElement('li', {
                key: restaurants[1].reviews[1].id,
                children: restaurants[1].reviews[1].text,
              }),
              React.createElement('li', {
                key: restaurants[1].reviews[2].id,
                children: restaurants[1].reviews[2].text,
              }),
            ],
          }),
        ],
      }),

      // third restaurant
      React.createElement('li', {
        key: restaurants[2].id,
        children: [
          React.createElement('h2', {key: restaurants[2].name, children: restaurants[2].name}),

          React.createElement('h3', {key: `menu-subtitle-${restaurants[2].id}`, children: 'Меню:'}),

          React.createElement('ul', {
            id: `menu-${restaurants[2].name}`,
            key: `menu-${restaurants[2].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[2].menu[0].id,
                children: restaurants[2].menu[0].name,
              }),
              React.createElement('li', {
                key: restaurants[2].menu[1].id,
                children: restaurants[2].menu[1].name,
              }),
              React.createElement('li', {
                key: restaurants[2].menu[2].id,
                children: restaurants[2].menu[2].name,
              }),
            ],
          }),

          React.createElement('h3', {key: `reviews-subtitle-${restaurants[2].id}`, children: 'Отзывы:'}),

          React.createElement('ul', {
            id: `reviews-${restaurants[2].name}`,
            key: `reviews-${restaurants[2].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[2].reviews[0].id,
                children: restaurants[2].reviews[0].text,
              }),
            ],
          }),
        ],
      }),

      // fourth restaurant
      React.createElement('li', {
        key: restaurants[3].id,
        children: [
          React.createElement('h2', {key: restaurants[3].name, children: restaurants[3].name}),

          React.createElement('h3', {key: `menu-subtitle-${restaurants[3].id}`, children: 'Меню:'}),

          React.createElement('ul', {
            id: `menu-${restaurants[3].name}`,
            key: `menu-${restaurants[3].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[3].menu[0].id,
                children: restaurants[3].menu[0].name,
              }),
              React.createElement('li', {
                key: restaurants[3].menu[1].id,
                children: restaurants[3].menu[1].name,
              }),
            ],
          }),

          React.createElement('h3', {key: `reviews-subtitle-${restaurants[3].id}`, children: 'Отзывы:'}),

          React.createElement('ul', {
            id: `reviews-${restaurants[3].name}`,
            key: `reviews-${restaurants[3].id}`,
            children: [
              React.createElement('li', {
                key: restaurants[3].reviews[0].id,
                children: restaurants[3].reviews[0].text,
              }),
              React.createElement('li', {
                key: restaurants[3].reviews[1].id,
                children: restaurants[3].reviews[1].text,
              }),
            ],
          }),
        ],
      }),
    ],
  }),
);
