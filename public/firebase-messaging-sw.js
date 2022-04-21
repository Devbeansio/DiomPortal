// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDvv1A9M790a_IE-C3yjP8FobbjbPQdMpM",
  authDomain: "push-notifications-50a11.firebaseapp.com",
  projectId: "push-notifications-50a11",
  storageBucket: "push-notifications-50a11.appspot.com",
  messagingSenderId: "871253072824",
  appId: "1:871253072824:web:d8840bf726ff58ce4d8d4d",
};
// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
