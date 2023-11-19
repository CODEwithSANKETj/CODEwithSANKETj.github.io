
// resume button 
// let btn = document.querySelector("#resume-button-1")
// let btn2=document.querySelector("#resume-button-2")
// btn2.addEventListener("click",redirec)
// btn.addEventListener("click",redirec)


function redirec(){

window.open("https://drive.google.com/file/d/1JVuvORmDyOGplWQ7qEV_QaBeYlyWnXwA/view?usp=sharing","blank")

}

// resume button 


GitHubCalendar(".calendar", "CODEwithSANKETj", { responsive: true });

// Smooth scroll function
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - document.querySelector('#nav-menu').offsetHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }
  
  
  document.querySelectorAll('.topnav a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1); 
      smoothScroll(targetId);
    });
  })








