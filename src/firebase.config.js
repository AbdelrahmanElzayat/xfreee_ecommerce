import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4HmTwLBeVjPDcxATl0D-wyglg_hxSLK4",
  authDomain: "xfreee-ea88b.firebaseapp.com",
  projectId: "xfreee-ea88b",
  storageBucket: "xfreee-ea88b.appspot.com",
  messagingSenderId: "649290486890",
  appId: "1:649290486890:web:6d20acc35e1c4444ba2613",
  measurementId: "G-K3HFY3PX5V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app