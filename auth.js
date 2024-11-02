//auth.js

// Import necessary Firebase functions from SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Show Register Form
document.getElementById('register-here').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
});

// Back to Login from Register Form
document.getElementById('back-to-login-register').addEventListener('click', function () {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Show Reset Password Form
document.getElementById('forgot-password').addEventListener('click', function () {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('reset-password-form').style.display = 'block';
});

// Back to Login from Reset Password Form
document.getElementById('back-to-login-reset').addEventListener('click', function () {
    document.getElementById('reset-password-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                window.location.href = 'dashboard.html';  // Redirect to dashboard.html
            })
            .catch((error) => {
                alert("Login failed: " + error.message);
            });
    });
}

// Register Form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Check if password is at least 8 characters
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;  // Prevent further execution if password is too short
        }
        
        // Create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                // Add user details to Firestore
                try {
                    await setDoc(doc(db, "users", user.uid), {
                        firstName: firstName,
                        lastName: lastName,
                        email: email
                    });
                    alert("Registration successful!");
                    window.location.href = 'index.html'; // Redirect to login page
                } catch (error) {
                    console.error("Error adding document: ", error);
                    alert("Registration failed: " + error.message);
                }
            })
            .catch((error) => {
                alert("Registration failed: " + error.message);
            });
    });
}

// Reset Password Form
const resetForm = document.getElementById('resetForm');
if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('resetEmail').value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent!");
            })
            .catch((error) => {
                alert("Password reset failed: " + error.message);
            });
    });
}