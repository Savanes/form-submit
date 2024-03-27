document.getElementById('btn').addEventListener('click', function(){
    document.querySelector('.wrapper-modal-window').classList.add('open')
    document.querySelector('.main-wrapper').classList.add('open')
})
document.getElementById('close').addEventListener('click', function(){
    document.querySelector('.wrapper-modal-window').classList.remove('open')
    document.querySelector('.main-wrapper').classList.remove('open')
})



document.getElementById('form').addEventListener('submit', function(e){
    // e.preventDefault();
    console.log(e)
})

