document.getElementById("birthCertificateForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        child_name: document.getElementById("childName").value,
        date_of_birth: document.getElementById("dateOfBirth").value,
        gender: document.getElementById("gender").value,
        birth_place: document.getElementById("birthPlace").value,
        father_name: document.getElementById("fatherName").value,
        mother_name: document.getElementById("motherName").value,
        address: document.getElementById("address").value,
        village: document.getElementById("village").value,
        district: document.getElementById("district").value,
        pincode: document.getElementById("pincode").value
    };

    const response = await fetch("http://127.0.0.1:8000/birth-certificate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    alert(result.message);
    console.log(result);
});