import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAQCLEQp5tIDPZWO7AP1mqBr2f4MT37dEc',
	authDomain: 'superchat-0000.firebaseapp.com',
	projectId: 'superchat-0000',
	storageBucket: 'superchat-0000.appspot.com',
	messagingSenderId: '211047479551',
	appId: '1:211047479551:web:e7ae340a68b2ae4ec7f4ca',
	measurementId: 'G-ZW9GDKLPVL',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
