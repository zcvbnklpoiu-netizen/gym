// ===============================
// Select Elements
// ===============================

const form = document.querySelector("form");

const fullnameEle = document.querySelector("#fullname");
const phoneNumberEle = document.querySelector("#phoneNumber");
const ageEle = document.querySelector("#age");
const planEle = document.querySelector("#plan");
const messageEle = document.querySelector("#message");


// ===============================
// Submit Form
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();


    // ===============================
    // Validation
    // ===============================

    if (fullnameEle.value.trim() === "") {
        alert("Please enter your full name.");
        return;
    }

    if (phoneNumberEle.value.trim() === "") {
        alert("Please enter your phone number.");
        return;
    }

    if (ageEle.value.trim() === "") {
        alert("Please enter your age.");
        return;
    }

    if (planEle.value === "") {
        alert("Please select a membership plan.");
        return;
    }


    // ===============================
    // Create Member Object
    // ===============================

    const member = {

        fullName: fullnameEle.value.trim(),

        phoneNumber: phoneNumberEle.value.trim(),

        age: ageEle.value.trim(),

        plan: planEle.value,

        message: messageEle.value.trim()

    };


    // ===============================
    // Save Data LocalStorage
    // ===============================

    const members = JSON.parse(localStorage.getItem("members")) || [];

    members.push(member);

    localStorage.setItem("members", JSON.stringify(members));


    // ===============================
    // Success Message
    // ===============================

    alert("Your membership request has been submitted successfully!");



    // ===============================
    // Send Email
    // ===============================

    const subject = "New Membership Request";


    const body =
`Full Name: ${member.fullName}

Phone Number: ${member.phoneNumber}

Age: ${member.age}

Plan: ${member.plan}


Message:

${member.message}`;


    window.location.href =
    `mailto:zcvbnklpoiu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;


    // Reset Form

    form.reset();

});