
let userName = document.getElementById("user-name");
let userPost = document.getElementById("user-post");

let query = new URLSearchParams(location.search);

let id = query.get("userId");;

console.log(id);


getData("posts", (posts) => {
    userPost.innerHTML = "";

    let res = posts.filter((el) => el.userId == +id);

    res.map((post) => {
        userPost.innerHTML += `
         <div class="bg-white/10 backdrop-blur-md  text-white font-bold p-[10px] flex   max-w-[500px] rounded-[10px]">

                    <div class="malumot ">
                        <h1>UserID : ${post.userId}</h1>
                        <h3>Post ID : ${post.id}</h3>
                        <h2>Title : ${post.title}</h2>
                        <h2>Body : ${post.body}</h2>
                        
                    </div>


                    <div class="icon flex flex-col justify-end items-center">
                    <a href="../pages/comment.html?postId=${post.id}" class="text-white border rounded-[5px] p-[5px] flex ">Comment</a>
                    </div>

                </div>
        `
    })
})