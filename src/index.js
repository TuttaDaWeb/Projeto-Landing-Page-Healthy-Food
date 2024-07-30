let a = document.querySelectorAll('.navbar-item')
let logo = document.querySelector('#navbar-logo')
let title = document.querySelector('#intro-h1')
let desc = document.querySelector('.intro-para')
let color = 0

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

// Navbar Items
for(let i = 0; i < a.length; i++){
    a[i].addEventListener('mouseover', ()=>{
        color = getRandomInt(4)
        if(color == 0){
            //Amarelo
            a[i].style.color = 'yellow'
        }
        else if(color == 1){
            //Laranja
            a[i].style.color = '#ff7b24'
        }
        else if(color == 2){
            //Verde Amarelado
            a[i].style.color = '#91ff00'
        }
        else if(color == 3){
            // Verde
            a[i].style.color = '#00ff00'
        }
    })
}
for(let i = 0; i < a.length; i++){
    a[i].addEventListener('mouseout', ()=>{
        a[i].style.color = '#49a767'
    })
}
//HFoods Logon
logo.addEventListener('mouseover', ()=>{
    color = getRandomInt(4)
    if(color == 0){
        //Amarelo
        logo.style.color = 'yellow'
    }
    else if(color == 1){
        //Laranja
        logo.style.color = '#ff7b24'
    }
    else if(color == 2){
        //Verde Amarelado
        logo.style.color = '#91ff00'
    }
    else if(color == 3){
        // Verde
        logo.style.color = '#00ff00'
    }
})
logo.addEventListener('mouseout', ()=>{
    logo.style.color = '#8bd6a3'
})
//Healthy Foods H1
title.addEventListener('mouseover', ()=>{
    color = getRandomInt(4)
    if(color == 0){
        //Amarelo
        title.style.color = 'yellow'
    }
    else if(color == 1){
        //Laranja
        title.style.color = '#ff7b24'
    }
    else if(color == 2){
        //Verde Amarelado
        title.style.color = '#91ff00'
    }
    else if(color == 3){
        // Verde
        title.style.color = '#00ff00'
    }
})
title.addEventListener('mouseout', ()=>{
    title.style.color = 'black'
})
//Paragráfo do .intro-description
desc.addEventListener('mouseover', ()=>{
    color = getRandomInt(4)
    if(color == 0){
        //Amarelo
        desc.style.color = 'yellow'
    }
    else if(color == 1){
        //Laranja
        desc.style.color = '#ff7b24'
    }
    else if(color == 2){
        //Verde Amarelado
        desc.style.color = '#91ff00'
    }
    else if(color == 3){
        // Verde
        desc.style.color = '#00ff00'
    }
})
desc.addEventListener('mouseout', ()=>{
    desc.style.color = 'black'
})