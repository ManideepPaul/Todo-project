const input = document.querySelector(".input");
const add = document.querySelector(".add");
const deleteBtn = document.querySelector(".delete");
const taskContainer = document.querySelector(".taskContainer");


const addFunction = () => {
    if (input.value) {
        let taskDiv = document.createElement("div")
        let task = document.createElement("p")
        let checkBox = document.createElement("img")
        let editBox = document.createElement("img")
        let deleteBox = document.createElement("img")
        
        task.innerText = input.value;
        checkBox.src = "./icons/check-line.svg"
        editBox.src = "./icons/edit-box-fill.svg"
        deleteBox.src = "./icons/delete-bin.svg"
        
        task.classList.add("task")
        checkBox.classList.add("checkBox")
        editBox.classList.add("editBox")
        deleteBox.classList.add("deleteBox")
        taskDiv.classList.add("taskDiv");
        
        taskDiv.appendChild(task)
        taskDiv.appendChild(checkBox)
        taskDiv.appendChild(editBox)
        taskDiv.appendChild(deleteBox)
        
        taskContainer.appendChild(taskDiv)
        input.value = "";
        
        checkBox.addEventListener('click', () => {
            (checkBox.style.background === "rgb(96, 197, 103)") ?
            checkBox.style.background = "#6262f4" :
            checkBox.style.background = "#60c567"
        })
        
        editBox.addEventListener('click', () => {
            let inputBox = document.createElement('input')
            let submit = document.createElement('button')
            
            inputBox.classList.add('inputBox')
            submit.innerText = "UPDATE"
            submit.classList.add('editInput')
            task.innerText = ""
            
            task.appendChild(inputBox)
            task.appendChild(submit) 
            submit.addEventListener('click', () => {
                if (inputBox.value){
                    task.innerText = inputBox.value;
                }
            })
            
        })
        
        deleteBox.addEventListener('click', () => {
            deleteBox.parentElement.remove()
        })
    }
}

deleteBtn.addEventListener('click', () => {
    input.value = '';
})

add.addEventListener('click', addFunction)

input.addEventListener('keydown', (e) => {
    if(e.keyCode === 13) {
        addFunction();
    }
})