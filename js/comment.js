let comentDed = document.getElementById("comentd");


let query = new URLSearchParams(location.search);
let id = query.get("postId");
console.log(id);



getData("comments", (comments) => {
    comentDed.innerHTML = "";
    let res = comments.filter((el) => el.postId == +id);
    console.log(res);

    res.map((comment) => {
        comentDed.innerHTML += `
         <div class="bg-white/10 backdrop-blur-md p-[20px] max-w-[500px] w-full rounded-[10px] ">
                        <h1 class="text-[#FF4500] my-[5px] font-bold text-[20px]">
                            ${comment.email}
                        </h1>
                        <h2 class="text-white ">
                            ${comment.name}
                        </h2>
                        <p class=" text-[greenyellow my-[10px]">
                            ${comment.body}
                        </p>
                    </div>
        `
    })


})