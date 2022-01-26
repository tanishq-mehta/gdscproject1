/*if(window.location == '#page2'){
    document.getElementById("link2").style.textDecoration ="underline";
}*/
window.addEventListener("DOMContentLoaded", () => {
function handleOver()   
{  
     document.getElementById('button1').style.backgroundColor = 'rgb(214,162,146)';  
}  

function handleOut()   
{  
     document.getElementById('button1').style.backgroundColor = 'rgb(183,130,118)';  
}  

function handleOver2()   
{  
     document.getElementById('button2').style.backgroundColor = 'rgb(214,162,146)';  
}  

function handleOut2()   
{  
     document.getElementById('button2').style.backgroundColor = 'rgb(183,130,118)';  
}  

var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");

$(window).scroll(function(){
     var scrollAmt =  $(window).scrollTop();
     if(scrollAmt <=500){
          link1.classList.add("clicked-mavLink");
          link2.classList.remove("clicked-mavLink");
          link3.classList.remove("clicked-mavLink");

     } else if(scrollAmt>500 && scrollAmt<=1000){
          link1.classList.remove("clicked-mavLink");
          link3.classList.remove("clicked-mavLink");
          link2.classList.add("clicked-navLink"); 
     } else {
          link2.classList.remove("clicked-mavLink");
          link1.classList.remove("clicked-mavLink");
          link3.classList.add("clicked-navLink");     
     }
})
}
// link1.addEventListener("click", function(){ 
//      link2.classList.remove("clicked-navLink");
//      link3.classList.remove("clicked-mavLink");
//      link1.classList.add("clicked-mavLink");
// })

// link2.addEventListener("click", function(){
//      link1.classList.remove("clicked-mavLink");
//      link3.classList.remove("clicked-mavLink");
//      link2.classList.add("clicked-navLink");
// })

// link3.addEventListener("click", function(){
//      link2.classList.remove("clicked-mavLink");
//      link1.classList.remove("clicked-mavLink");
//      link3.classList.add("clicked-navLink");
// });
