var spider = document.getElementById('spider');
var ctx = spider.getContext('2d');

const width = 500;
const height = 350;
const offset = 150;

const circle = Math.PI*2
const deg = circle/360

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const arrow=(x1,y1, x2,y2, w, color)=>{

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    // line
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(
        clamp(x2, x1-offset,x1+offset),
        clamp(y2, y1-offset,y1+offset),
    );
    ctx.lineWidth = w;
    ctx.stroke();

    // point
    ctx.beginPath();
    ctx.arc(
        clamp(x2, x1-offset,x1+offset),
        clamp(y2, y1-offset,y1+offset),
        w*1.5,
        0*deg,
        circle,
        false
    );
    ctx.fill();
}

const draw=(x,y)=>{
    spider.width = width; // px
    spider.height = height;

    arrow(width/2,height/2, x,y, 5, 'yellowgreen');
    arrow(50,50, x,y, 5, 'yellowgreen');
};

draw();
// window.addEventListener('resize',draw);
window.addEventListener('mousemove', pos=>{
    const rect = spider.getBoundingClientRect();
    const x = pos.pageX - rect.x;
    const y = pos.pageY - rect.y;

    draw(x,y);
});