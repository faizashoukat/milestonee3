

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumedisplayelement = document.getElementById('resume-display') as HTMLDivElement;

//Handle Form Submissiom

form.addEventListener('submit', (event:Event) => {
    event.preventDefault();

// Collect Input Data
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phoneNo = (document.getElementById('phoneNo') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value

    // display  resume dynamically
    const resumeHTML=`
    <h1>Resume</h1>
    <h2>Personal Information</h2>
    <p><b>Name</b> :${name}</p>
    <p><b>Email :</b>${email}</p>
    <p><b>Phone No :</b>${phoneNo}</b></p><br>
    <h2>Education</h2>
    <p>${education}</p><br>
    <h2>Skills<h2>
    <h4>${skills}</h4><br>
    <h2>Work Experience</h2>
    <p>${experience}</p>`;
    
// Display Generated Resume
if(resumedisplayelement){
    resumedisplayelement.innerHTML = resumeHTML;
}
else
{
    console.error('Something Went Wrong');
}
});
