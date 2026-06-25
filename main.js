let rasmlar = [
    "https://picsum.photos/id/600/400?random=1",
    "https://picsum.photos/id/600/400?random=2",
    "https://picsum.photos/id/600/400?random=3",
]

let i = 0;

const rasmElement = document.getElementById("rasm");

function next(){
    i = (i + 1) % rasmlar.length;
    rasmElement.src = rasmlar[i];
}

function prev(){
    i = (i - 1 + rasmlar.length) % rasmlar.length;
    rasmElement.src = rasmlar[i];
}