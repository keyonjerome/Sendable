
export class FirebaseConfig {
    baseConfig: {
      apiKey: "AIzaSyCnafX9qMpWIEZke4hd2yNAjwFlZGqqtzg",
      authDomain: "sendable.firebaseapp.com",
      databaseURL: "https://sendable.firebaseio.com",
      projectId: "sendable",
      storageBucket: "sendable.appspot.com",
      messagingSenderId: "704326462515",
      appId: "1:704326462515:web:e1bb889472d5fa9a858746"
      };
    getConfig(){
      console.log(this.baseConfig);
      return {apiKey: "AIzaSyCnafX9qMpWIEZke4hd2yNAjwFlZGqqtzg",
      authDomain: "sendable.firebaseapp.com",
      databaseURL: "https://sendable.firebaseio.com",
      projectId: "sendable",
      storageBucket: "sendable.appspot.com",
      messagingSenderId: "704326462515",
      appId: "1:704326462515:web:e1bb889472d5fa9a858746"};
    }
}