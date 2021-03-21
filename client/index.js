import { registerRootComponent } from 'expo';
import * as firebase from 'firebase';


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDme40nJ_ZAobvNLXyeZJnSD9iF4Nfo8ao",
    authDomain: "bird-app-test.firebaseapp.com",
    projectId: "bird-app-test",
    storageBucket: "bird-app-test.appspot.com",
    messagingSenderId: "288941485898",
    appId: "1:288941485898:web:7f9b4213238b538cf49bb3"
};

firebase.initializeApp(firebaseConfig);

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
