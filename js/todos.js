let todosDed = document.getElementById("todos");

let query = new URLSearchParams(location.search);
let id = query.get("userId");;



getData("todos", (todos) => {
    todosDed.innerHTML = "";
    let res = todos.filter((el) => el.userId == +id);
console.log(res);

    res.map((todo) => {
        todosDed.innerHTML += `
        <div class=" bg-white rounded-[5px] flex px-[10px]  items-center  w-full h-[50px] my-[10px]">
                        <h1 class="">
                            ${todo.title}
                        </h1>
                        
                    </div>
        `
    })

    
})

