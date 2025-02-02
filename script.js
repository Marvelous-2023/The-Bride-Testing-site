// BAckground image changer 
const images = ["images/church-building.jpeg", "images/Jesus.jpeg", "images/logo.jpeg", "images/eagle.jpeg", "images/prophet on pulpit.jpeg"];
let index = 0;
function changeBackground() {

    document.getElementById("home").style.backgroundImage = `url(${images[index]})`;

    index = (index + 1) %
images.length;
}
setInterval(changeBackground, 5000);

// Typing effect 
const text = "Welcome to The Bride of Christ, Sabon Gari, Bwari, Abuja";
let i = 0;
function typeWriter() {
    if (i < text.length){
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = () => {
    typeWriter();
    changeBackground();
};

// Download Sermon
function downloadSermon(fileID) {
    window.location.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
}

// Download Sermon
function downloadSermon(fileID) {
    window.location.href = `https://drive.google.com/uc?export=download&id=${fileID}`;
}


//Show Question Form
function showQuestionForm() {
    document.getElementById("question-form").scrollIntoView({behavior: "smooth"});
}

//Handle form submission 
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").Value;


    const email = document.getElementById("email").Value;

    const question = document.getElementById("question").Value;



    window.location.href = `mailto:ayooluwamarvelous392@gmail.com?subject= Question from ${name}&{question}`;
    alert("Your question hass been sent!");
});