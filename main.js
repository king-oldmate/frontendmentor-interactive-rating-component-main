//document.querySelectorAll('.rating').forEach(element => element.addEventListener('click', rate))
let selection 


function doThis(number){
    selection = number
    document.querySelectorAll('.rating').forEach(element => element.classList.remove('selected'))
    //document.getElementsByClassName('rating')
    document.getElementById(number).classList.add('selected')
    console.log(number)
}

function submission(){
    if (isNaN(selection)){

    } else {
        document.getElementById('rating-state').classList.add('hidden')
        document.getElementById('chosen-rating').innerText = selection
        document.getElementById('thanks-state').classList.remove('hidden')
    }    
}