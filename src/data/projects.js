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
    ]
  },
  {
    img: carBellIcon,
    title: 'Kurumajiten Car Bell',
    desc:
      'Japanese Car Trading & Management System, is part of Extreme Cloud Project built by Angular. The complex app states are managed by NGRX.',
    link: 'https://kurumajiten.firebaseapp.com/',
    techIcons: [
      {
        name: 'angular',
        iconImg: angular
      },
      {
        name: 'ngrx',
        iconImg: ngrx
      }
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
    ]
  }
];

export const sideProjects = [
  {
    img: ngCart,
    title: 'Simple Shopping Cart',
    desc:
      'Simple Shopping Cart Web App built by Angular. App states are managed by NGRX(store, effect and entity). Backend data is managed by Firebase. The app is PWA for native mobile app feeling.',
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
    ]
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
    ]
  }
];
