let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let text = document.querySelector('.text');
let input = document.querySelector('.input');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball{
    constructor(){
        this.r = 40;
        this.x = randomnum (this.r , window.innerWidth - this.r);
        this.y = randomnum (this.r , window.innerHeight - this.r);
        this.vx = (Math.random() - 0.5) *30 ;
        this.vy = (Math.random() - 0.5) *30 ;
        this.draw();
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.r , 0 , 2 * Math.PI );
        ctx.fillStyle = 'blue';
        ctx.fill();
    }
    update(){
        if(this.x+this.r > window.innerWidth || this.x - this.r < 0){
            this.vx = -this.vx;
        }
        if(this.y + this.r > window.innerHeight || this.y - this.r < 0){
            this.vy = -this.vy;
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}


let balls = [];
let counter_circle = Math.floor(Math.random()*20);
for(let i =0 ; i < counter_circle; i++){
    balls.push(new Ball);
}

let animate = () => {
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    
    balls.forEach(ball => {
        ball.update()
    })
    
    requestAnimationFrame(animate)
}

animate();


function randomnum (min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
    
input.addEventListener('input',() => {
    if(counter_circle == Number(input.value)){
        document.body.style.background ='#2ed573'
    }
    else if (input.value == ""){
        document.body.style.background ='#fff'
    }
    else{
        document.body.style.background ='#ff6b81'
    }
})
window.addEventListener('resize',() => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})