

let boutonalbum= document.querySelector('.album')
let fond= document.querySelector('.contain')
let pagealbum= document.querySelector('.listing_album')


let jour=true;

boutonalbum.addEventListener('click',function(){
    fond.classList.toggle('containeffet')
    pagealbum.classList.toggle('listing_albumeffet')
})

let boutondisco= document.querySelector('.disco')
let pagedisco= document.querySelector('.discographie')

boutondisco.addEventListener('click' ,function(){
    fond.classList.toggle('containeffet')
    pagedisco.classList.toggle('discographieeffet')

})
let contentswitch=document.querySelector('.sousswitch')
let journuit="J";
contentswitch.textContent=journuit

let boutonswitch= document.querySelector('.popswitch')

boutonswitch.addEventListener('click',function(){
    fond.classList.toggle('containswitch')
    let result=jour;
    
    if (result===true) {
        jour=false
        journuit="N";
        contentswitch.textContent=journuit
        
    }
    if (result===false) {
        
        jour=true
        journuit="J";
        contentswitch.textContent=journuit
    }
  
})


/* apparition des texte dans la section album*/


let content_album=document.querySelector('.content_album')


pagealbum.addEventListener('click',function(){
    pagealbum.classList.toggle('listing_albumeffet')
    fond.classList.toggle('containeffet')
})

pagedisco.addEventListener('click',function(){
    pagedisco.classList.toggle('discographieeffet')
    fond.classList.toggle('containeffet')
})





let pop1= document.querySelector('.pop')
pop1.addEventListener('click',function(){
    fond.classList.toggle('containeffet')
    pagealbum.classList.toggle('listing_albumeffet')
})









let pop3=document.querySelector('.pop3')
let spotify= document.querySelector('.musique')
pop3.addEventListener('click',function(){

    spotify.classList.toggle('musique_effet')
    fond.classList.toggle('containeffet')

   
})

spotify.addEventListener('click' ,function(){
    spotify.classList.toggle('musique_effet')
    fond.classList.toggle('containeffet')
})
let explication= document.querySelector('.explication')
let croix2 =document.querySelector('.croix_pop_up')
croix2.addEventListener('click',function(){
 explication.classList.add('explicationeffet')
})

let biographie= document.querySelector('.biographie')
let pop4= document.querySelector('.pop4')
pop4.addEventListener('click' ,function(){

biographie.classList.toggle('biographieeffet')
fond.classList.toggle('containeffet')
})

biographie.addEventListener('click',function(){
    fond.classList.toggle('containeffet')
    biographie.classList.toggle('biographieeffet')
})

let pop5= document.querySelector('.pop5')
pop5.addEventListener('click',function(){
    fond.classList.toggle('containeffet')
    pagedisco.classList.toggle('discographieeffet')

})
let calendrier= document.querySelector('.calendrier')
let pop2=document.querySelector('.pop2')
pop2.addEventListener('click' ,function(){
calendrier.classList.toggle('calendriereffet')
fond.classList.toggle('containeffet')
    })

calendrier.addEventListener('click',function() {
    fond.classList.toggle('containeffet')
    calendrier.classList.toggle('calendriereffet')
    
})


let song= document.querySelector('.song')

song.addEventListener('click',function(){
    spotify.classList.toggle('musique_effet')
    fond.classList.toggle('containeffet')
})

let portrait = document.querySelector('.portrait')
portrait.addEventListener('click',function(){
    fond.classList.toggle('containeffet')
    biographie.classList.toggle('biographieeffet')
})

let liste_tourner=document.querySelector('.liste_tourner')

liste_tourner.addEventListener('click',function(){
    calendrier.classList.toggle('calendriereffet')
fond.classList.toggle('containeffet')
})

