let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
            
        }
        else {
            sec.classList.remove('show-animate');
        }

    })
    let header = document.querySelector('.header'); // Use .header for selecting by class
  
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


    
  }
  
function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value ,
        phone: document.getElementById("phone").value ,
        subject: document.getElementById("subject").value ,
        message: document.getElementById("message").value ,

    }
    const serviceID = "service_oioy7dq";
    const templateID = "template_2hyyldl";
    
    emailjs
       .send(serviceID,templateID,params)
       .then((res) =>{
         document.getElementById("name").value = "" ;
         document.getElementById("email").value = "" ;
         document.getElementById("phone").value = "" ;
         document.getElementById("subject").value = "";
         document.getElementById("message").value = "";
         console.log(res);
         alert("your message sent successfuly")
       })
        .catch((err) => console.log(err));

}
