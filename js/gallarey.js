let gallareyDed = document.getElementById("gallarey");

let query = new URLSearchParams(location.search);
let id = query.get("userId");
console.log(id);


getData("photos", (photos) =>{
    gallareyDed.innerHTML = "";
    let res = photos.filter((el) => el.albumId == +id);
    res.map((photo) =>{
        gallareyDed.innerHTML += `
          <div class="bg-white/10 backdrop-blur-md p-[10px] rounded-[10px] my-[10px]">
                        <h1 class="text-white text-[20px] font-bold">
                            ${photo.title}
                        </h1>
                        <button
                        onClick="window.open('${photo.url}')"
                        class="border border-white text-white px-[10px] my-[10px] p-[5px] rounded-[10px] cursor-pointer">Gallery</button>
                    </div>
        `
    })
})