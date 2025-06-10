var con=document.querySelector(".container")
var pop=document.querySelector(".popupbox")
var buu=document.querySelector(".but")

buu.addEventListener("click",function()

{
    con.style.display="block"
    pop.style.display="block"
})


var kkr=document.querySelector(".can")

kkr.addEventListener("click",function(){
    con.style.display="none"
    pop.style.display="none"
}
)

var dud=document.querySelector(".top")
var onn=document.querySelector(".non")
var pla=document.querySelector(".tnp")
var hol=document.querySelector(".put")
var der=document.querySelector(".des")

onn.addEventListener("click",function()
{
    var div=document.createElement("div")
    div.setAttribute("class","box") 
    div.innerHTML=`<h2>${pla.value}</h2>
            <h3>${hol.value}</h3>
            <p>${der.value}</p>
            <button onclick="varrr(event)">Delete</button>`
            dud.append(div)
        })
    
    function varrr(event)
    {
          event.target.parentElement.remove()
    }