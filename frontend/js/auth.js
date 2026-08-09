/* =========================================================
   DIGITAL GRAM PANCHAYAT
   Authentication Frontend
   ========================================================= */


/* ================= ELEMENTS ================= */

const registerForm = document.getElementById("registerForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const terms = document.getElementById("terms");

const formMessage = document.getElementById("formMessage");

const registerButton = document.getElementById("registerButton");
const registerButtonText = document.getElementById("registerButtonText");


/* ================= PASSWORD TOGGLE ================= */

function setupPasswordToggle(buttonId, inputId) {

    const button = document.getElementById(buttonId);
    const input = document.getElementById(inputId);

    if (!button || !input) {
        return;
    }

    button.addEventListener("click", () => {

        const isPassword =
            input.type === "password";

        input.type =
            isPassword ? "text" : "password";

        const icon = button.querySelector("i");

        icon.className =
            isPassword
                ? "bi bi-eye-slash"
                : "bi bi-eye";

    });

}


setupPasswordToggle(
    "passwordToggle",
    "password"
);

setupPasswordToggle(
    "confirmPasswordToggle",
    "confirmPassword"
);


/* ================= PASSWORD STRENGTH ================= */

const strengthBars =
    document.querySelectorAll(
        ".strength-bars span"
    );

const passwordStrength =
    document.getElementById(
        "passwordStrength"
    );


function checkPasswordStrength(value) {

    if (!strengthBars.length) {
        return;
    }

    let score = 0;

    if (value.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(value)) {
        score++;
    }

    if (/[0-9]/.test(value)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }


    strengthBars.forEach((bar) => {

        bar.style.background =
            "#e1e7e3";

    });


    if (score === 0) {

        passwordStrength.textContent =
            "Use 8+ characters with letters and numbers.";

    }


    if (score === 1) {

        strengthBars[0].style.background =
            "#dc3545";

        passwordStrength.textContent =
            "Weak password.";

    }


    if (score === 2) {

        strengthBars[0].style.background =
            "#f5b942";

        strengthBars[1].style.background =
            "#f5b942";

        passwordStrength.textContent =
            "Fair password.";

    }


    if (score === 3) {

        for (let i = 0; i < 3; i++) {
            strengthBars[i].style.background =
                "#198754";
        }

        passwordStrength.textContent =
            "Good password.";

    }


    if (score === 4) {

        strengthBars.forEach((bar) => {

            bar.style.background =
                "#146c43";

        });

        passwordStrength.textContent =
            "Strong password.";

    }

}


if (password) {

    password.addEventListener(
        "input",
        () => {
            checkPasswordStrength(
                password.value
            );
        }
    );

}


/* ================= ERROR HANDLING ================= */

function setError(input, errorId, message) {

    const errorElement =
        document.getElementById(errorId);

    input.classList.add(
        "input-invalid"
    );

    input.classList.remove(
        "input-valid"
    );

    errorElement.textContent =
        message;

}


function setValid(input, errorId) {

    const errorElement =
        document.getElementById(errorId);

    input.classList.remove(
        "input-invalid"
    );

    input.classList.add(
        "input-valid"
    );

    errorElement.textContent =
        "";

}


/* ================= FORM MESSAGE ================= */

function showMessage(message, type) {

    formMessage.textContent =
        message;

    formMessage.className =
        `form-message show ${type}`;

}


/* ================= VALIDATION ================= */

function validateRegistrationForm() {

    let valid = true;


    /* Full Name */

    const nameValue =
        fullName.value.trim();

    if (nameValue.length < 3) {

        setError(
            fullName,
            "fullNameError",
            "Please enter your full name."
        );

        valid = false;

    } else {

        setValid(
            fullName,
            "fullNameError"
        );

    }


    /* Email */

    const emailValue =
        email.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {

        setError(
            email,
            "emailError",
            "Please enter a valid email address."
        );

        valid = false;

    } else {

        setValid(
            email,
            "emailError"
        );

    }


    /* Mobile */

    const mobileValue =
        mobile.value.trim();

    const mobilePattern =
        /^[6-9][0-9]{9}$/;

    if (!mobilePattern.test(mobileValue)) {

        setError(
            mobile,
            "mobileError",
            "Enter a valid 10-digit mobile number."
        );

        valid = false;

    } else {

        setValid(
            mobile,
            "mobileError"
        );

    }


    /* Password */

    const passwordValue =
        password.value;

    if (passwordValue.length < 8) {

        setError(
            password,
            "passwordError",
            "Password must contain at least 8 characters."
        );

        valid = false;

    } else {

        setValid(
            password,
            "passwordError"
        );

    }


    /* Confirm Password */

    if (
        confirmPassword.value !==
        password.value
    ) {

        setError(
            confirmPassword,
            "confirmPasswordError",
            "Passwords do not match."
        );

        valid = false;

    } else {

        setValid(
            confirmPassword,
            "confirmPasswordError"
        );

    }


    /* Terms */

    if (!terms.checked) {

        document.getElementById(
            "termsError"
        ).textContent =
            "Please accept the terms to continue.";

        valid = false;

    } else {

        document.getElementById(
            "termsError"
        ).textContent =
            "";

    }


    return valid;

}


/* ================= FORM SUBMISSION ================= */

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            formMessage.className =
                "form-message";


            const isValid =
                validateRegistrationForm();


            if (!isValid) {

                showMessage(
                    "Please correct the highlighted fields.",
                    "error"
                );

                return;

            }


            /*
             * IMPORTANT:
             *
             * We are NOT calling the backend yet.
             *
             * Your friend will build the FastAPI
             * registration API separately.
             *
             * Once that API is ready, we will replace
             * this section with a real fetch() request.
             */


            registerButton.disabled =
                true;

            registerButtonText.textContent =
                "Creating Account...";


            await new Promise(
                (resolve) =>
                    setTimeout(resolve, 800)
            );


            showMessage(
                "Frontend validation successful. Backend connection will be added next.",
                "success"
            );


            registerButton.disabled =
                false;

            registerButtonText.textContent =
                "Create Account";

        }
    );

}

/* =========================================================
   LOGIN
   ========================================================= */

const loginForm =
    document.getElementById("loginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginMessage =
    document.getElementById("loginMessage");

const loginButton =
    document.getElementById("loginButton");

const loginButtonText =
    document.getElementById("loginButtonText");


/* ================= PASSWORD TOGGLE ================= */

setupPasswordToggle(
    "loginPasswordToggle",
    "loginPassword"
);


/* ================= LOGIN MESSAGE ================= */

function showLoginMessage(message, type) {

    if (!loginMessage) {
        return;
    }

    loginMessage.textContent =
        message;

    loginMessage.className =
        `form-message show ${type}`;

}


/* ================= LOGIN VALIDATION ================= */

function validateLoginForm() {

    let valid = true;


    /* Email */

    const emailValue =
        loginEmail.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(emailValue)) {

        setError(
            loginEmail,
            "loginEmailError",
            "Please enter a valid email address."
        );

        valid = false;

    } else {

        setValid(
            loginEmail,
            "loginEmailError"
        );

    }


    /* Password */

    if (!loginPassword.value) {

        setError(
            loginPassword,
            "loginPasswordError",
            "Please enter your password."
        );

        valid = false;

    } else {

        setValid(
            loginPassword,
            "loginPasswordError"
        );

    }


    return valid;

}


/* ================= LOGIN SUBMIT ================= */

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            loginMessage.className =
                "form-message";


            const isValid =
                validateLoginForm();


            if (!isValid) {

                showLoginMessage(
                    "Please enter your login details correctly.",
                    "error"
                );

                return;

            }


            /*
             * Backend connection will be added
             * after your friend's FastAPI API
             * is ready.
             */


            loginButton.disabled =
                true;

            loginButtonText.textContent =
                "Signing in...";


            await new Promise(
                (resolve) =>
                    setTimeout(resolve, 800)
            );


            showLoginMessage(
                "Frontend validation successful. Backend login will be connected next.",
                "success"
            );


            loginButton.disabled =
                false;

            loginButtonText.textContent =
                "Login to Account";

        }
    );

}


/* ================= FORGOT PASSWORD ================= */

const forgotPassword =
    document.getElementById("forgotPassword");


if (forgotPassword) {

    forgotPassword.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            showLoginMessage(
                "Password recovery will be available after backend authentication is connected.",
                "success"
            );

        }
    );

}