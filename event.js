$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        window.location.href = "index.html";
    });
    $("#te-table").hide();
    $("#te-menu").click(function (e) { 
        e.preventDefault();
        $("#vc-table").hide();
        $("#te-table").show();
    });
    $("#vc-menu").click(function (e) { 
        e.preventDefault();
        $("#te-table").hide();
        $("#vc-table").show();
    });
    $("#contact-us").click(function (e) { 
        e.preventDefault();
        window.location.href = "contact.html";
    });
});

// Validate input
const email = document.querySelector("#email");

function checkEmail() {
  let value = document.getElementById("email").value;  
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value.match(validRegex)) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        $("#email").css("borderColor", "tomato");
        
    } else {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        $("#email").css("borderColor", "lightGreen");
    }
}

const name = document.querySelector("#name");

function checkName() {
  let value = document.getElementById("name").value;    
    if (value.length < 3) {
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
    } else {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
    }
}

const phone = document.querySelector("#phone");

function checkPhone() {
  let value = document.getElementById("phone").value;    
    if (!value.startsWith("08") || value.length < 10 || value.length > 14) {
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
    } else {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    }
}

// Database Firestore
const firebaseConfig = {
    apiKey: "AIzaSyAqTRbU4D8UiiXbGcw6_azINKRIH46CFWI",
    authDomain: "session-13-fe.firebaseapp.com",
    projectId: "session-13-fe",
    storageBucket: "session-13-fe.appspot.com",
    messagingSenderId: "174671851409",
    appId: "1:174671851409:web:2bef96c984cf4fd5e03430"
};
    
// Inisialisasi firebase
firebase.initializeApp(firebaseConfig);
// Menggunakan firestore
const db = firebase.firestore()
// Referensi dokumen yang ada di firestore
const formCollection = db.collection("Registration_Data")
const form = document.getElementById("form")
 
// Submit validation
form.addEventListener('submit', e => {
    e.preventDefault()
    const email = document.getElementById("email")
    let invalidEmail = email.classList.contains("is-invalid");
    const name = document.getElementById("name")
    let invalidName = name.classList.contains("is-invalid");
    const phone = document.getElementById("phone")
    let invalidPhone = phone.classList.contains("is-invalid");
    if (invalidEmail || invalidName || invalidPhone) {
       console.log("Error")
    }
    else {
        const formData = new FormData(form)
        const emailAddress = formData.get("email")
        const fullName = formData.get("name")
        const phoneNum = formData.get("phone")
        const eventParticipation = formData.get("event")
       
        formCollection.add({
            emailAddress,
            fullName,
            phoneNum,
            eventParticipation
        })
   
        // AJAX
        function postData() {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                   "Content-Type": "application/json"
                },
                body: JSON.stringify(formCollection)
            })
            .then(response => response.json())
       
            postData()
        }    

        form.reset()
        const email = document.querySelector("#email");
        email.classList.remove("is-valid")
        const name = document.querySelector("#name");
        name.classList.remove("is-valid")
        const phone = document.querySelector("#phone");
        phone.classList.remove("is-valid")
    }
})
      

