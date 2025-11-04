let cards = document.getElementById("cards")

cards.innerHTML = `<div class="flex text-center justify-center text-white font-bold  text-[30px] w-[full] h-[full]">Loading...</div>`  

getData("users", (users) => {
    cards.innerHTML = "";

    users.map((user) => {
        cards.innerHTML += `
        <div
                    class="bg-white/10 backdrop-blur-md  text-white font-bold p-[10px] flex justify-between max-w-[500px] rounded-[10px]">

                    <div class="malumot ">
                        <h1>lastName: ${user.name}</h1>
                        <h3>firstName: ${user.username}</h3>
                        <h2>email: ${user.email}</h2>
                        <h2>website: ${user.website}</h2>
                        <h2>Address: ${user.address.city}</h2>
                        <h2>Phone: ${user.phone}</h2>
                    </div>

                    <div class="">
                        <div class="text-center flex flex-col items-center gap-[10px] mt-[10px]">
                            
                                <a href="../pages/todos.html?userId=${user.id}" class="border my-[10px] p-[5px] rounded-[10px] cursor-pointer">Todos</a>
                           
                            <a href="../pages/posts.html?userId=${user.id}" 
                                class="border p-[5px] rounded-[10px] cursor-pointer">Posts</a>


                                <a href="../pages/gallarey.html?userId=${user.id}" class="border my-[10px] p-[5px] rounded-[10px] cursor-pointer">Galarey</a>

                        </div>




                        




                    </div>

                </div>
        `;
    });
});