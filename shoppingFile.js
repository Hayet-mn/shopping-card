

var qplus=Array.from(document.querySelectorAll('.plus'));
var qmoins=Array.from(document.querySelectorAll('.moins'));
var hearts=Array.from(document.querySelectorAll('.heart'));
var annuler=Array.from(document.querySelectorAll('.annuler'));

for (let h of hearts){
    
    h.addEventListener('click', function(event){
    h.style.color === "red"?h.style.color = "black":h.style.color = "red";
    }  )
}



for (let a of qplus){
    a.addEventListener('click', function(event){
       a.nextElementSibling.innerHTML=Number(a.nextElementSibling.innerHTML)+1;
       total();
    })
 
    
}

for (let a of qmoins){
    a.addEventListener('click', function(event){
        if(a.previousElementSibling.innerHTML > 0) {
           a.previousElementSibling.innerHTML=Number(a.previousElementSibling.innerHTML)-1;
    }
       total();

    })
}

function total(){
   
    let sum = 0 ;
    var qty=Array.from(document.querySelectorAll('.qte'))
    var prixx=Array.from(document.querySelectorAll('.prix'));


    for(let i=0;i<qty.length;i++){

         sum += +qty[i].innerText * +prixx[i].innerText

    }
    
    document.getElementById("total").innerHTML = sum;

}



for (let x of annuler){
    
    x.addEventListener('click', function(event) {

        x.parentElement.parentElement.remove()

        total()


    }  )
}
