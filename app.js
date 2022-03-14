  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB3jpH8YL5Iqh_EmAMfBmNBrzGSJ7N57wk",
    authDomain: "shimada-push-test.firebaseapp.com",
    projectId: "shimada-push-test",
    storageBucket: "shimada-push-test.appspot.com",
    messagingSenderId: "152433524238",
    appId: "1:152433524238:web:0eb5981312e6e5ae0b465f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

//パーミッションチェックします。
  messaging.requestPermission()
  .then(function(){
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(function(token){
  //あとでcurlコマンドにセットするデバイストークンを出力します
    console.log(token);
    $("mytoken").text(token);
  })
  .catch(function(err){
    console.log('error Occuerd at getpermission');
     return messaging.getToken();
  })
 .then(function(token){
    console.log(token);
  });

  messaging.usePublicVapidKey("BJ8oAnd0vfTGgqPLafv926ypQGSSVWzB-pAnjS6NMnIwuqJP4m2e-DHL6IlIGuew5HsSYg2aZVp8dbvwDR1Ldo0");
  messaging.onMessage(function(payload){
    console.log('onMessage:',payload);
  });

