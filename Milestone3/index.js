var form = document.getElementById('resume-form');
var resumedisplayelement = document.getElementById('resume-display');
//Handle Form Submissiom
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect Input Data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNo = document.getElementById('phoneNo').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // display  resume dynamically
    var resumeHTML = "\n    <h1>Resume</h1>\n    <h2>Personal Information</h2>\n    <p><b>Name</b> :".concat(name, "</p>\n    <p><b>Email :</b>").concat(email, "</p>\n    <p><b>Phone No :</b>").concat(phoneNo, "</b></p><br>\n    <h2>Education</h2>\n    <p>").concat(education, "</p><br>\n    <h2>Skills<h2>\n    <h4>").concat(skills, "</h4><br>\n    <h2>Work Experience</h2>\n    <p>").concat(experience, "</p>");
    // Display Generated Resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error('Something Went Wrong');
    }
});
