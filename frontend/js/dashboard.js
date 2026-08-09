/* =========================================================
   DIGITAL GRAM PANCHAYAT
   CITIZEN DASHBOARD
   ========================================================= */


/* ================= MOBILE SIDEBAR ================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const dashboardSidebar =
    document.getElementById(
        "dashboardSidebar"
    );


if (mobileMenuButton && dashboardSidebar) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            dashboardSidebar.classList.toggle(
                "open"
            );

        }
    );

}


/* ================= LOGOUT ================= */

const logoutButton =
    document.getElementById(
        "logoutButton"
    );


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        () => {

            const confirmed =
                confirm(
                    "Are you sure you want to logout?"
                );


            if (confirmed) {

                /*
                 * Later we will clear the
                 * authentication token/session
                 * here.
                 */

                window.location.href =
                    "login.html";

            }

        }
    );

}


/* ================= AI ASSISTANT ================= */

const aiAssistantButton =
    document.getElementById(
        "aiAssistantButton"
    );


if (aiAssistantButton) {

    aiAssistantButton.addEventListener(
        "click",
        () => {

            alert(
                "AI Assistant will be connected here."
            );

        }
    );

}


/* ================= NOTICE CLOSE ================= */

const noticeClose =
    document.querySelector(
        ".notice-close"
    );

const dashboardNotice =
    document.querySelector(
        ".dashboard-notice"
    );


if (noticeClose && dashboardNotice) {

    noticeClose.addEventListener(
        "click",
        () => {

            dashboardNotice.style.display =
                "none";

        }
    );

}


/* ================= SERVICE SEARCH ================= */

const serviceSearch =
    document.getElementById(
        "serviceSearch"
    );


if (serviceSearch) {

    serviceSearch.addEventListener(
        "input",
        (event) => {

            const searchTerm =
                event.target.value
                    .toLowerCase()
                    .trim();


            const serviceCards =
                document.querySelectorAll(
                    ".quick-service-card"
                );


            serviceCards.forEach(
                (card) => {

                    const text =
                        card.textContent
                            .toLowerCase();


                    if (
                        !searchTerm ||
                        text.includes(searchTerm)
                    ) {

                        card.style.display =
                            "";

                    } else {

                        card.style.display =
                            "none";

                    }

                }
            );

        }
    );

}

/* =========================================================
   BIRTH CERTIFICATE APPLICATION
   ========================================================= */

const birthCertificateForm = document.getElementById("birthCertificateForm");

if (birthCertificateForm) {

    birthCertificateForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const declaration = document.getElementById("declaration");

        if (!declaration.checked) {

            alert("Please confirm the declaration before submitting.");

            return;
        }


        const pincode = document.getElementById("pincode").value.trim();

        if (!/^[0-9]{6}$/.test(pincode)) {

            alert("Please enter a valid 6-digit PIN code.");

            return;
        }


        /*
         * Frontend demo only.
         *
         * Later this section will send the form
         * data to your friend's FastAPI backend.
         */

        alert(
            "Application submitted successfully!\n\n" +
            "Your application has been recorded."
        );


        birthCertificateForm.reset();

    });

}