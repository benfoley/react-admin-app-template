import React from 'react';
import { Admin, Resource } from 'react-admin';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import { EntryList, EntryShow, EntryCreate, EntryEdit } from './Entry';
import Dashboard from './Dashboard';


// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDme40nJ_ZAobvNLXyeZJnSD9iF4Nfo8ao",
    authDomain: "bird-app-test.firebaseapp.com",
    projectId: "bird-app-test",
    storageBucket: "bird-app-test.appspot.com",
    messagingSenderId: "288941485898",
    appId: "1:288941485898:web:7f9b4213238b538cf49bb3"
};

const options = { relativeFilePaths: false };
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard} >
      <Resource name="entry" list={EntryList} create={EntryCreate} show={EntryShow} edit={EntryEdit} />
    </Admin >
)

export default App;
