import * as firebase from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBefMcez01NSz23QVwoIG6_fRQBwHBvbWA",
    authDomain: "push-natification2.firebaseapp.com",
    projectId: "push-natification2",
    storageBucket: "push-natification2.appspot.com",
    messagingSenderId: "878410043310",
    appId: "1:878410043310:web:b4a38994c17a526380023f",
  });
};

export const askForPermissionToReceiveNotifications = async () => {
  try {
    const messaging = getMessaging();
    // await messaging.requestPermission();
    const token = await getToken(messaging, {
      vapidKey:
        "BMrOTIHNM-4BhOKAJnU8jjMZuiODtLlB8Cg9gok2U-MbUXVwpRA72tJG_mpJfgMudyLuZ4E_L3SR0FwyuEMXQ1E",
    });
    console.log("Your token is:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
