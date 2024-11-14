let counter = 0;
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-Btn');
const decrementBtn = document.getElementById('decrement-Btn');

incrementBtn.addEventListener('click', () =>{
    counter++;
    counterValue.innerHTML = counter;
});

decrementBtn.addEventListener('click',()=>{
    counter--;
    counterValue.innerHTML = counter;
});

