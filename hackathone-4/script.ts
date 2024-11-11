
document.getElementById("ResumeForm")?.addEventListener("submit", function (event: Event) {
    event.preventDefault();
  
    // Helper function to safely get an element by ID
    const getElement = <T extends HTMLElement>(id: string): T | null => document.getElementById(id) as T | null;
  
    // Fetch the input elements using the helper function
    const nameElement = getElement<HTMLInputElement>("fullName");
    const emailElement = getElement<HTMLInputElement>("email");
    const phoneElement = getElement<HTMLInputElement>("phoneNumber");
    const educationElement = getElement<HTMLTextAreaElement>("education");
    const experienceElement = getElement<HTMLTextAreaElement>("Experience");
    const skillsElement = getElement<HTMLTextAreaElement>("skills");
  
    // Ensure all elements are found and non-null
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
  
        // Create resume output
        const resumeOutput = `
            <h2>Resume</h2>
            <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
            <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
            <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
  
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
  
            <h3>Experience</h3>
            <p contenteditable="true">${experience}</p>
  
            <h3>Skills</h3>
            <p contenteditable="true">${skills}</p>
        `;
  
        // Display the generated resume in the output div
        const resumeOutputElement = getElement<HTMLElement>("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.log("Error: Cannot find resumeOutput element");
        }
    } else {
        console.log("One or more input elements not found");
    }
  });