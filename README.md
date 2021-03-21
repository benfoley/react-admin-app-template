# Template React Firebase project

This combines a React-admin site and React-Native app, with data from Firebase Firestore. Uses Expo for convenience.

Requires XCode / Android Studio for simulators, or test on your own device. To use your own device, install the Expo Go app on your device (go to the app store and get it).


## Firebase

Make a Firebase project, add a Firestore database and add some data. Copy the web config data.

Add an authentication method in Firebase > Authentication > Get Started. This template has email signin method and no registration. Add yourself as a user in Firebase > Authentication.


## Data 

This project assumes a collection of docs with `id`, `name` and `info` (optional) fields.

Import dummy data to Firestore using https://www.npmjs.com/package/firestore-export-import. Template data:
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

If using a JSON generator (https://next.json-generator.com/EyTd3VxV9) to build dummy data, the exported data will be a JSON array. Edit the exported data file and wrap the data array with the "entry" name and enclose it in an object `{}` as per the template above.


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

Now you should see a list of your entries in the emulator app.

## Admin
Copy the firebase config into `src/App.tsx`

Run the admin site with 
```
yarn start
```

Sign in and you should see the Dashboard. Click the Entries menu item in the left sidebar to administer content.
