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



function viewApplication(applicationId, serviceName, date, status) {

    const modal = document.getElementById("applicationModal");

    const modalService = document.getElementById("modalService");
    const modalApplicationId = document.getElementById("modalApplicationId");
    const modalDate = document.getElementById("modalDate");
    const modalStatus = document.getElementById("modalStatus");

    if (!modal) {
        return;
    }

    modalService.textContent = serviceName;
    modalApplicationId.textContent = applicationId;
    modalDate.textContent = date;
    modalStatus.textContent = status;

    modal.classList.add("show");

}

const applicationModal = document.getElementById("applicationModal");

const closeApplicationModal =
    document.getElementById("closeApplicationModal");

const closeApplicationModalBottom =
    document.getElementById("closeApplicationModalBottom");


if (closeApplicationModal) {

    closeApplicationModal.addEventListener("click", function () {

        applicationModal.classList.remove("show");

    });

}


if (closeApplicationModalBottom) {

    closeApplicationModalBottom.addEventListener("click", function () {

        applicationModal.classList.remove("show");

    });

}


if (applicationModal) {

    applicationModal.addEventListener("click", function (event) {

        if (event.target === applicationModal) {

            applicationModal.classList.remove("show");

        }

    });

}

// =========================================================
// BIRTH CERTIFICATE APPLICATION SUBMISSION
// =========================================================

const birthCertificateForm =
    document.getElementById("birthCertificateForm");

const applicationSuccess =
    document.getElementById("applicationSuccess");


if (birthCertificateForm && applicationSuccess) {

    birthCertificateForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            // Check declaration
            const declaration =
                document.getElementById("declaration");

            if (declaration && !declaration.checked) {

                alert(
                    "Please confirm the declaration before submitting."
                );

                return;
            }


            // Check PIN code
            const pincode =
                document.getElementById("pincode");

            if (
                pincode &&
                !/^[0-9]{6}$/.test(
                    pincode.value.trim()
                )
            ) {

                alert(
                    "Please enter a valid 6-digit PIN code."
                );

                return;
            }


            // Generate temporary application ID
            const applicationId =
                "GP-" +
                new Date().getFullYear() +
                "-" +
                Math.floor(
                    10000 + Math.random() * 90000
                );


            // Display application ID
            const successApplicationId =
                document.getElementById(
                    "successApplicationId"
                );

            if (successApplicationId) {

                successApplicationId.textContent =
                    applicationId;

            }


            // Hide form
            birthCertificateForm.style.display =
                "none";


            // Show success message
            applicationSuccess.classList.add(
                "show"
            );


            // Scroll to success message
            applicationSuccess.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}