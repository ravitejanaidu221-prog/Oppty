const images = [
    "https://picsum.photos/id/1011/800/400",
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1019/800/400",
    "https://picsum.photos/id/1020/800/400",
    "https://picsum.photos/id/1021/800/400"
];
let index = 0;
const slideImage = document.getElementById("slideImage");

function showslide(){
    slideImage.src = images[index];
}

function nextSlide(){
    index++
    if (index >= images.length){
        index = 0
    }
    show()
}


function prevSlide(){
    index--
    if(index < 0){
        index = images.length - 1;
        }
        show()
}

setInterval(next, 5000);