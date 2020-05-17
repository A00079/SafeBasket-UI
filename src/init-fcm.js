import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-qHxuBR9FcFOe3TRKMezxPcKhvO-9PGI",
  authDomain: "vuefiretest-c6e3b.firebaseapp.com",
  databaseURL: "https://vuefiretest-c6e3b.firebaseio.com",
  projectId: "vuefiretest-c6e3b",
  storageBucket: "vuefiretest-c6e3b.appspot.com",
  messagingSenderId: "101818530234",
  appId: "1:101818530234:web:21b6469ad9466113898583",
  measurementId: "G-H311ERVSFJ"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
  "BC4RdoebnlaLgJQ1hnHOyRNcUj0w38wLENfJDmWf-h_8EBz7Pc9wLMH5wEM9AchMRgZBbNcYsxG_1bC17IiB9_g"
);

export { messaging };
