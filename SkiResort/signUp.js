const form = document.querySelector("form");
let nField = form.querySelector(".name");
let nInput = nField.querySelector("input");
let eField = form.querySelector(".email");
let eInput = eField.querySelector("input");
let pField = form.querySelector(".password");
let pInput = pField.querySelector("input");
let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let errors = document.querySelector(".error-txt");


form.onsubmit = (e) => {
    e.preventDefault(); //preventing from form submitting
    //if name email and password is blank then add shake class in it else call specified function

    (nInput.value == "") ? nField.classList.add("shake", "error") : checkName();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();


    setTimeout(() => { //remove shake class after 500ms
        nField.classList.remove("shake");
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    nInput.onkeyup = () => { checkName(); }
    eInput.onkeyup = () => { checkEmail(); } //calling checkEmail function on email input keyup
    pInput.onkeyup = () => { checkPass(); } //calling checkPassword function on pass input keyup


    function checkName() { //checkPass function
        if (nInput.value == "") { //if pass is empty then add error and remove valid class
            nField.classList.add("error");
            nField.classList.remove("valid");
        } else { //if pass is empty then remove error and add valid class
            nField.classList.remove("error");
            nField.classList.add("valid");
        }
    }

    function checkEmail() { //checkEmail function
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
        if (!eInput.value.match(pattern)) { //if pattern not matched then add error and remove valid class
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");
            //if email value is not empty then show please enter valid email else show Email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
        } else { //if pattern matched then remove error and add valid class
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }


    if (!nField.classList.contains("error") && !eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }

    signinBtn.onclick = function () {
        nameField.style.maxHeight = "0";
        nameField.style.border = "none";
        errors.style.color = "transparent";

        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function () {
        nameField.style.maxHeight = "60px";
        nameField.style.border = "1px solid #bfbfbf";
        errors.style.color = "rgb(243, 96, 120)";

        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }
}
