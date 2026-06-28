// =============================
// DDR Academy JavaScript
// =============================

// Registration Form Validation
const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let course = document.getElementById("course").value;

        if (name === "" || email === "" || phone === "" || course === "") {

            alert("Please fill all the required fields.");

        } else {

            alert("Registration Submitted Successfully!");

            form.reset();

        }

    });
}

// Back to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});