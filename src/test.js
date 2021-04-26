import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();
firestore.collection('users').doc('XJu8Qn1ZAQD40qTl9k2d').collection('cartItems');
firestore.doc('/users/XJu8Qn1ZAQD40qTl9k2d/cartItems/8xZma3b43yc4pCDROmoX');
firestore.collection('users/XJu8Qn1ZAQD40qTl9k2d/cartItems')