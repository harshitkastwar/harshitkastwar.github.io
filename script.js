const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){

    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*1.5,
        a:Math.random(),
        s:Math.random()*0.3
    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let star of stars){

        star.y += star.s;

        if(star.y>canvas.height){
            star.y=0;
            star.x=Math.random()*canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
        ctx.fillStyle="rgba(255,255,255,"+star.a+")";
        ctx.fill();

    }

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});

document
.getElementById("explore-btn")
.addEventListener("click",()=>{

    document
    .getElementById("about")
    .scrollIntoView({
        behavior:"smooth"
    });

});