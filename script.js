function handleFileInput() {
    var fileInput = document.getElementById("profilepicture");
    var preview = document.getElementById("profilePicturePreview");
    // Event listener for image file input
    fileInput.addEventListener("change", function () {
        var _a;
        var file = (_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                preview.src = reader_1.result; // Set image source to the selected file
                preview.style.display = "block"; // Display the image preview
            };
            reader_1.readAsDataURL(file);
        }
    });
}
// Function to generate the resume
function generateResume(event) {
    event.preventDefault(); // Prevent the form from submitting (default behavior)
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var school = document.getElementById("School").value;
    var degree = document.getElementById("degree").value;
    var graduationYear = document.getElementById("graduationYear").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var profilePicture = document.getElementById("profilePicturePreview").src; // Get the image preview
    // Create the resume content, ensuring image comes first
    var resumeHTML = "\n    <h2>Generated Resume</h2>\n    <div style=\"text-align: center; margin-bottom: 20px;\">\n      \n      <img src=\"".concat(profilePicture, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%; display: block; margin: 0 auto;\">\n    </div>\n    <p><strong>Name:</strong> ").concat(name, "</p>\n    <p><strong>Email:</strong> ").concat(email, "</p>\n    <p><strong>Phone:</strong> ").concat(phone, "</p>\n     <p><strong>School:</strong> ").concat(school, "</p>\n    <p><strong>Degree:</strong> ").concat(degree, "</p>\n    <p><strong>Graduation Year:</strong> ").concat(graduationYear, "</p>\n    <p><strong>Experience:</strong>").concat(experience, "</p>\n    <p><strong>Skills:</strong>").concat(skills, "</p>\n  ");
    // Create a Blob object to store the resume content
    var blob = new Blob([resumeHTML], { type: "text/html" });
    var resumeLink = URL.createObjectURL(blob); // Create a URL for the Blob object
    // Display the generated resume
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = resumeHTML;
    // Create a shareable link
    var linkHTML = "\n    <p><strong>Shareable Link:</strong> <a href=\"".concat(resumeLink, "\" target=\"_blank\" download=\"resume.html\">Click here to view or download the resume</a></p>\n  ");
    // Add the link to the output
    resumeOutput.innerHTML += linkHTML;
}
// Initialize the script
document.addEventListener("DOMContentLoaded", function () {
    handleFileInput(); // Activate the file input handler
    var form = document.getElementById("Resumeform");
    // Attach the event listener to the form submit event
    form.addEventListener("submit", generateResume); // Call resume generation on form submit
});
