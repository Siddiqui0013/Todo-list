let arr=[]
list.style.display = "none"

btnAdd.addEventListener("click", addTodo)
formData.addEventListener("keyup", (e)=>{
    if(e.key == "Enter")
    addTodo(e)
} )

function addTodo(e){
    e.preventDefault()
    let newItem = formData.value;
            if (newItem.trim() === "") {
                alert("Please Enter a Todo")
            }
            else{
                arr.push(newItem);
                console.log(arr)
                list.style.display = "block"
                listItem.innerHTML += `<li>${newItem}</li>`;
                formData.value = "";    
            }
}

btnDlt.addEventListener("click", (e) => {
    e.preventDefault();
    if (arr.length > 0) {
        arr.pop();
        console.log(arr)
        // Clear the list before re-rendering
        listItem.innerHTML = "";
        for (let item of arr) {
            listItem.innerHTML += `<li>${item}</li>`;
        }
    }
    else{
        list.style.display = "none"
        alert("List is already empty")
    }
});













// formData.addEventListener("keyup", (e) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         let newItem = formData.value;
//         if (newItem.trim() === "") {
//             alert("Please Enter a Todo")
//         }
//         else{
//             arr.push(newItem);
//             console.log(arr)
//             list.style.display = "block"
//             listItem.innerHTML += `<li>${newItem}</li>`;
//             formData.value = "";    
//         }
//     }
// });

// btnAdd.addEventListener("click", (e)=>{
//     e.preventDefault()

//     let newItem = formData.value
//     if (newItem.trim() === "") {
//         alert("Please Enter a Todo")
//     }
//     else{
//         arr.push(newItem);
//         console.log(arr)
//         list.style.display = "block"
//         listItem.innerHTML += `<li>${newItem}</li>`;
//         formData.value = "";    
//     }
// })









// btnDlt.addEventListener("click", (e)=>{
//     e.preventDefault()

//     arr.pop()
//     console.log(arr)
//     listItem.innerHTML -= `<li>${arr[0]}</li>`

// })