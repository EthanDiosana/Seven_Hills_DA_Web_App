const student_roster = document.getElementById("student_roster");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, addDoc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUT990uD9EAcvf1dTrU4CBYbRTfdevw_U",
  authDomain: "seven-hills-da.firebaseapp.com",
  databaseURL: "https://seven-hills-da-default-rtdb.firebaseio.com",
  projectId: "seven-hills-da",
  storageBucket: "seven-hills-da.appspot.com",
  messagingSenderId: "164164947717",
  appId: "1:164164947717:web:3a6dddbf98001c424df16c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

////////////////////////////////////////////////////////////////

// Get the form values.

const first_name_field = document.getElementById("first-name");
const last_name_field = document.getElementById("last-name");
const address_field = document.getElementById("address");
const phone_number_field = document.getElementById("phone-number");
const email_field = document.getElementById("email");
const license_number_field = document.getElementById("license-number");
const license_expiry_field = document.getElementById("license-expiry");

const form =  document.getElementById("student-form");

form.addEventListener('submit', (element) => {
    element.preventDefault();

    let first_name = first_name_field.value;
    let last_name = last_name_field.value;
    let address = address_field.value;
    let phone_number = phone_number_field.value;
    let email = email_field.value;
    let license_number = license_number_field.value;
    let license_expiry = license_expiry_field.value;

    // Saves data to the firestore.
    try {
      const docRef = addDoc(collection(db, "Students"), {
        first_name: first_name,
        last_name: last_name,
        address: address,
        phone_number: phone_number,
        email: email,
        license_number: license_number,
        license_expiry: license_expiry
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      
    }

});

