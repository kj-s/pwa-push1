// importScriptsはservice worker内から他のserviceworkerを読み込むときに使えます
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.3.4/firebase-messaging.js");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3jpH8YL5Iqh_EmAMfBmNBrzGSJ7N57wk",
    authDomain: "shimada-push-test.firebaseapp.com",
    projectId: "shimada-push-test",
    storageBucket: "shimada-push-test.appspot.com",
    messagingSenderId: "152433524238",
    appId: "1:152433524238:web:0eb5981312e6e5ae0b465f"
  };
  //var firebaseConfig = {
  //  apiKey: "ウェブAPIキー",
  //  authDomain: "プロジェクトID.firebaseapp.com",
  //  databaseURL: "https://プロジェクトID.firebaseio.com",
  //  projectId: "プロジェクトID",
  //  storageBucket: "",
  //  messagingSenderId: "送信者ID",
  //  appId: "アプリID"
  //};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


/**
 * foreground時にメッセージを受け取ると、通知をする。通知の中身はtitleやoptionから設定できる。
 */
self.addEventListener("push", function(event) {
  const title = "WebPushテスト";
  const options = {
    body: "イベントリスナーから発火[push]",
    // 通知の右にでる画像
    icon:
      "",
      // 通知の左にでる画像
    badge: ""
  };

  event.waitUntil(self.registration.showNotification(title, options));
});


/**
 * background時の通知の扱い。ここではconsoleにメッセージを出力した上で、通知を出している。通知の中身はtitleやoptionから設定できる。
 */
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };
  
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
