import moneySimpleIcon from '../assets/project-icon/money_simple_icon.png';
import carChannelIcon from '../assets/project-icon/carchannel.png';
import carBellIcon from '../assets/project-icon/carbell.png';
import carstamateIcon from '../assets/project-icon/carstamate.jpg';
import ngPokedexIcon from '../assets/project-icon/ng-pokedex.png';
import ngCart from '../assets/project-icon/ng_cart.png';

import angular from '../assets/tech-icon/angular.png';
import ngrx from '../assets/tech-icon/ngrx.png';
import android from '../assets/tech-icon/android.png';
import kotlin from '../assets/tech-icon/kotlin.png';
import angularMaterial from '../assets/tech-icon/ng-material.png';
import angularPWA from '../assets/tech-icon/ng-pwa.png';
import jest from '../assets/tech-icon/jest.png';
import storybook from '../assets/tech-icon/storybook.png';
import firebase from '../assets/tech-icon/firebase.png';

// Screenshots

import carchannel_ss_1 from '../assets/project-screenshot/carchannel/1.png';
import carchannel_ss_2 from '../assets/project-screenshot/carchannel/2.png';
import carchannel_ss_3 from '../assets/project-screenshot/carchannel/3.png';
import carchannel_ss_4 from '../assets/project-screenshot/carchannel/4.png';

import kurumajiten_ss_1 from '../assets/project-screenshot/kurumajiten/1.png';
import kurumajiten_ss_2 from '../assets/project-screenshot/kurumajiten/2.png';
import kurumajiten_ss_3 from '../assets/project-screenshot/kurumajiten/3.png';
import kurumajiten_ss_4 from '../assets/project-screenshot/kurumajiten/4.png';
import kurumajiten_ss_5 from '../assets/project-screenshot/kurumajiten/5.png';

import carsta_ss_1 from '../assets/project-screenshot/carstamate/1.png';
import carsta_ss_2 from '../assets/project-screenshot/carstamate/2.png';
import carsta_ss_3 from '../assets/project-screenshot/carstamate/3.png';
import carsta_ss_4 from '../assets/project-screenshot/carstamate/4.png';

import shopping_ss_1 from '../assets/project-screenshot/simple-shopping/1.png';
import shopping_ss_2 from '../assets/project-screenshot/simple-shopping/2.png';
import shopping_ss_3 from '../assets/project-screenshot/simple-shopping/3.png';
import shopping_ss_4 from '../assets/project-screenshot/simple-shopping/4.png';

import pokedex_ss_1 from '../assets/project-screenshot/ng-pokedex/1.png';
import pokedex_ss_2 from '../assets/project-screenshot/ng-pokedex/2.png';

import money_ss_1 from '../assets/project-screenshot/money-simple/1.png';
import money_ss_2 from '../assets/project-screenshot/money-simple/2.png';
import money_ss_3 from '../assets/project-screenshot/money-simple/3.png';
import money_ss_4 from '../assets/project-screenshot/money-simple/4.png';

export const projects = [
  {
    img: carChannelIcon,
    title: 'Car Channel BtoB',
    desc:
      'Japanese B2B Car Trading & Management System, is part of Extreme Cloud Project built by Angular. The complex app states are managed by NGRX.',
    link: 'http://104.198.85.214:8089/home',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      },
      {
        name: 'ngrx',
        iconImg: ngrx
      },
      {
        name: 'jest',
        iconImg: jest
      },
      {
        name: 'storybook',
        iconImg: storybook
      }
    ],
    screenshots: [
      { src: carchannel_ss_1 },
      { src: carchannel_ss_2 },
      { src: carchannel_ss_3 },
      { src: carchannel_ss_4 }
    ]
  },
  {
    img: carBellIcon,
    title: 'Kurumajiten Car Bell',
    desc:
      'Japanese Car Trading & Management System, is part of Extreme Cloud Project built by Angular. The complex app states are managed by NGRX.',
    link: 'https://kurumajiten.jp/',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      },
      {
        name: 'ngrx',
        iconImg: ngrx
      }
    ],
    screenshots: [
      { src: kurumajiten_ss_1 },
      { src: kurumajiten_ss_2 },
      { src: kurumajiten_ss_3 },
      { src: kurumajiten_ss_4 },
      { src: kurumajiten_ss_5 }
    ]
  },
  {
    img: carstamateIcon,
    title: 'Carstamate',
    desc:
      'Japanese Car Trading & Management System, is part of Extreme Cloud Project built by Angular. It is the first project that I have built by using Angular.',
    link: 'https://carsta.cloud/',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      }
    ],
    screenshots: [
      { src: carsta_ss_1 },
      { src: carsta_ss_2 },
      { src: carsta_ss_3 },
      { src: carsta_ss_4 }
    ]
  }
];

export const sideProjects = [
  {
    img: ngCart,
    title: 'Simple Shopping Cart',
    desc:
      'Simple Shopping Cart Web App built by Angular. App states are managed by NGRX(store, effect and entity). Backend data and authentication are managed by Firebase. The app is PWA for native mobile app feeling.',
    link: 'https://simple-shopping-cart.firebaseapp.com/',
    github: 'https://github.com/devlorz/ng-shopping-cart',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      },
      {
        name: 'ngrx',
        iconImg: ngrx
      },
      {
        name: 'angular-material',
        iconImg: angularMaterial
      },
      {
        name: 'angular-pwa',
        iconImg: angularPWA
      },
      {
        name: 'firebase',
        iconImg: firebase
      }
    ],
    screenshots: [
      { src: shopping_ss_1 },
      { src: shopping_ss_2 },
      { src: shopping_ss_3 },
      { src: shopping_ss_4 }
    ]
  },
  {
    img: ngPokedexIcon,
    title: 'NG-POKEDEX',
    desc:
      'Simple Pokedex Progressive Web App built by Angular and Angular Material. This App use Service Worker for caching so offline mode is supported.',
    link: 'https://ng-pokedex-f8bf4.firebaseapp.com/',
    github: 'https://github.com/devlorz/ng6-pokedex',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      },
      {
        name: 'angular-material',
        iconImg: angularMaterial
      },
      {
        name: 'angular-pwa',
        iconImg: angularPWA
      },
      {
        name: 'jest',
        iconImg: jest
      },
      {
        name: 'storybook',
        iconImg: storybook
      }
    ],
    screenshots: [{ src: pokedex_ss_1 }, { src: pokedex_ss_2 }]
  },
  {
    img: moneySimpleIcon,
    title: 'Money Simple',
    desc:
      'A simple android money management app that help you track income and outcome transactions with monthly overview. Some parts of the app are written by Kotlin.',
    link:
      'https://play.google.com/store/apps/details?id=com.leeway.moneysimple',
    techIcons: [
      {
        name: 'android',
        iconImg: android
      },
      {
        name: 'kotlin',
        iconImg: kotlin
      }
    ],
    screenshots: [
      { src: money_ss_1 },
      { src: money_ss_2 },
      { src: money_ss_3 },
      { src: money_ss_4 }
    ]
  }
];
