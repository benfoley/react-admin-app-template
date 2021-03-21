# Template React Firebase project

This combines a React-admin site and React-Native app, with data from Firebase Firestore. Uses Expo for convenience.

Requires XCode / Android Studio for simulators, or test on your own device. Install the Expo Go app on your device (go to the app store and get it).

## Firebase

Make a Firebase project, add a Firestore database and add some data. Copy the Web config data.

Assumes a collection of docs with an id and name fields.

If using a JSON generator (https://next.json-generator.com/EyTd3VxV9) you may need to wrap the exported JSON array in an object with the collection name. E.g.:
```
{
    "entry": [
        {
        "id": 1,
        "name": "string",
        "info": "string"
        }
    ]
}
```

Import local data to Firestore using https://www.npmjs.com/package/firestore-export-import

Add an authentication method in Firebase > Authentication > Get Started. This template has email signin method and no registration. Add yourself as a user in Firebase > Authentication.

## Client

Install the Expo command line tool. Ignore the message that says to do audit fix.
```
npm install --global expo-cli
```

Copy the Firebase web config details into `client/index.tsx`

Run the client app in iOS simulator
```
cd client
expo start
```

Should see a list of your entries.

## Admin
Copy the firebase config into `src/App.tsx`
