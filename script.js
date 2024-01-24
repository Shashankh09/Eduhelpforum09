var acc = document.getElementsByClassName("accordion");
var i;
for(i=0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");
        var pannel = this.nextElementSibling;

        if(pannel.style.display ==="block" ){
            pannel.style.display = "none";
        }
        else{
            pannel.style.display = "block";
        }
    });
}

let section=document.querySelectorAll('section')
let navLink=document.querySelectorAll('header div nav ul li a')
window.onscroll=()=>{
    section.forEach(sec=>{
       
        let id=sec.getAttribute('id')
{
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header div nav ul li a[href*='+id+']').classList.add('active')
            })
        }
    })
}


