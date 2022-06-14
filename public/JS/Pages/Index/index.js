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

//////////////////////////////////////////////////////////////////////////

const querySnapshot = await getDocs(collection(db, "Students"));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);

    let first_name = doc.data().first_name;
    let last_name = doc.data().last_name;
    let address = doc.data().address;
    let phone_number = doc.data().phone_number;
    let email = doc.data().email;
    let license_number = doc.data().license_number;
    let license_expiry = doc.data().license_expiry;

    let student = new Student(first_name, last_name,
         address, phone_number, email, license_number, license_expiry);
    ROSTER.add_student(student);
});

//////////////////////////////////////////////////////////////////////////

ROSTER.students.forEach(student => {
    var student_widget = new Student_Widget(student);
    student_widget.info_button.addEventListener("click", function() {
        ROSTER.set_current_student(student);
    });
    student_roster.appendChild(student_widget.get_widget());
});


const docRef = doc(db, "Students", "Test");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  