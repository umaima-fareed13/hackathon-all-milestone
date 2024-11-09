function handleFileInput() {
  const fileInput = document.getElementById("profilepicture") as HTMLInputElement;
  const preview = document.getElementById("profilePicturePreview") as HTMLImageElement;

  // Event listener for image file input
  fileInput.addEventListener("change", () => {
    const file = fileInput.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        preview.src = reader.result as string; // Set image source to the selected file
        preview.style.display = "block"; // Display the image preview
      };
      reader.readAsDataURL(file);
    }
  });
}

// Function to generate the resume
function generateResume(event: Event) {
  event.preventDefault(); // Prevent the form from submitting (default behavior)

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const school = (document.getElementById("School") as HTMLTextAreaElement).value;
  const degree = (document.getElementById("degree") as HTMLTextAreaElement).value;
  const graduationYear = (document.getElementById("graduationYear") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
  const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
  const profilePicture = (document.getElementById("profilePicturePreview") as HTMLImageElement).src; // Get the image preview

  // Create the resume content, ensuring image comes first
  const resumeHTML = `
    <h2>Generated Resume</h2>
    <div style="text-align: center; margin-bottom: 20px;">
      
      <img src="${profilePicture}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; display: block; margin: 0 auto;">
    </div>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
     <p><strong>School:</strong> ${school}</p>
    <p><strong>Degree:</strong> ${degree}</p>
    <p><strong>Graduation Year:</strong> ${graduationYear}</p>
    <p><strong>Experience:</strong>${experience}</p>
    <p><strong>Skills:</strong>${skills}</p>
  `;

  // Create a Blob object to store the resume content
  const blob = new Blob([resumeHTML], { type: "text/html" });
  const resumeLink = URL.createObjectURL(blob); // Create a URL for the Blob object

  // Display the generated resume
  const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
  resumeOutput.innerHTML = resumeHTML;

  // Create a shareable link
  const linkHTML = `
    <p><strong>Shareable Link:</strong> <a href="${resumeLink}" target="_blank" download="resume.html">Click here to view or download the resume</a></p>
  `;
  
  // Add the link to the output
  resumeOutput.innerHTML += linkHTML;
}

// Initialize the script
document.addEventListener("DOMContentLoaded", () => {
  handleFileInput(); // Activate the file input handler

  const form = document.getElementById("Resumeform") as HTMLFormElement;

  // Attach the event listener to the form submit event
  form.addEventListener("submit", generateResume); // Call resume generation on form submit
});
