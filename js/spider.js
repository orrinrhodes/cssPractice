var spiderCanvas = document.getElementById('spider');
var ctx = spiderCanvas.getContext('2d');

const width = 500;
const height = 350;
const offset = 150;

const circle = Math.PI*2
const deg = circle/360

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


// clamp(x2, x1-offset,x1+offset),
// clamp(y2, y1-offset,y1+offset),
const arrow=(p0, p1, w, color, first)=>{

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    // line
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineWidth = w;
    ctx.stroke();

    // points
    if(first){
        ctx.beginPath();
        ctx.arc(
            p0.x,
            p0.y,
            w*1.5,
            0*deg,
            circle,
            false
        );
        ctx.fill();
    };

    ctx.beginPath();
    ctx.arc(
        p1.x,
        p1.y,
        w*1.5,
        0*deg,
        circle,
        false
    );
    ctx.fill();
};

const hexagon = [
    {x:50, y:50},
    {x:150, y:150},
    {x:300, y:100},
    {x:350, y:300},
];

const draw=()=>{
    spiderCanvas.width = width; // px
    spiderCanvas.height = height;

    var p0;
    var p1;
    Object.keys(hexagon).reverse().forEach(point=>{
        console.log(point, hexagon[point]);
        if(!p0){
            console.log('not yer')
            p0 = hexagon[point];
        } else{
            arrow(p0, hexagon[point], 2, 'skyblue');
        };
    });

    // do in opposite order so bubbles dont overlap
    // arrow(p2, p3, 5, 'yellow')
    // arrow(p1, p2, 5, 'red');
    // arrow(p0, p1, 5, 'yellowgreen', true);
    
};

draw();
window.addEventListener('resize',draw);
// window.addEventListener('mousemove', pos=>{
//     const rect = spiderCanvas.getBoundingClientRect();
//     const x = pos.pageX - rect.x;
//     const y = pos.pageY - rect.y;

//     draw(x,y);
// });