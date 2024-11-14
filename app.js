let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if(input.value.trim !== 0){
        addBtn.classList.add('active')]
    } else {
        addBtn.classList.remove('active')
    }
})
addBtn.addEventListener('click', () => {
    if(input.value.trim() !==0) {
        let newitems = document.createElement('div');
        newitems.classList.add('items');
        newitems.innerHTML = 
        <p> ${input.value}</p>
        <div class="item-btn">
            <i class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-xmark"></i>
         </div>

         tasks.appendChild(newitems);
         input.value = '';
    }else{
        alert('please enter a task')
    }
       
    }

})
