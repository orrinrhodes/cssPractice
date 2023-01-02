var spiderCanvas = document.getElementById('spider');
var ctx = spiderCanvas.getContext('2d');

const width = 550;
const height = 350;
const offset = 150;

const circle = Math.PI*2
const deg = circle/360

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const plotText =(p)=>{
    ctx.fillStyle = 'white';
    ctx.font = '18px Courier New';
    ctx.fillText(
        `(${p.x},${p.y})`,
        p.x+10,p.y-3,
    );
}

// clamp(x2, x1-offset,x1+offset),
// clamp(y2, y1-offset,y1+offset),
const arrow=(p0, p1, w, color, last)=>{

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    // line
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineWidth = w;
    ctx.stroke();

    // points
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

    if(last){
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
        
        plotText(p1);
    };

    plotText(p0);
};

const hexagon = [
    {x:50, y:50},
    {x:150, y:150},
    {x:300, y:30},
    {x:400, y:300},
    {x:200, y:250},
    {x:50, y:325},
    {x:250, y:325},
    {x:50, y:200},
];

const colors = [
    'orange',
    'yellow',
    'red',
    'green',
    'blue',
];

// const randomItem =(list)=> {
//     return list[Math.floor(Math.random()*list.length)];
// };

const draw=()=>{
    spiderCanvas.width = width; // px
    spiderCanvas.height = height;

    var p0;
    var colorIndex = -1;
    // do in opposite order so bubbles dont overlap
    Object.keys(hexagon).reverse().forEach(point=>{
        if(!p0){
            p0 = hexagon[point];
        } else{
            // loop through colors         
            colorIndex = (colorIndex + 1) % colors.length;
            // plot point!
            arrow(p0, hexagon[point], 5,colors[colorIndex], point == 0);
            p0 = hexagon[point];
        };
    });
};

draw();
window.addEventListener('resize',draw);
// window.addEventListener('mousemove', pos=>{
//     const rect = spiderCanvas.getBoundingClientRect();
//     const x = pos.pageX - rect.x;
//     const y = pos.pageY - rect.y;

//     draw(x,y);
// });