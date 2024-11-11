var _a;
(_a = document.getElementById("ResumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Helper function to safely get an element by ID
    var getElement = function (id) { return document.getElementById(id); };
    // Fetch the input elements using the helper function
    var nameElement = getElement("fullName");
    var emailElement = getElement("email");
    var phoneElement = getElement("phoneNumber");
    var educationElement = getElement("education");
    var experienceElement = getElement("Experience");
    var skillsElement = getElement("skills");
    // Ensure all elements are found and non-null
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n            <h2>Resume</h2>\n            <p><b>Name:</b> <span contenteditable=\"true\">".concat(name_1, "</span></p>\n            <p><b>Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n            <p><b>Phone:</b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n  \n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n  \n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n  \n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(skills, "</p>\n        ");
        // Display the generated resume in the output div
        var resumeOutputElement = getElement("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.log("Error: Cannot find resumeOutput element");
        }
    }
    else {
        console.log("One or more input elements not found");
    }
});
