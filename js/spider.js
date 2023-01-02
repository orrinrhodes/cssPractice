var spiderCanvas = document.getElementById('spider');
var ctx = spiderCanvas.getContext('2d');

const width = 600;
const height = 400;
const offset = 150;

// const randomItem =(list)=> {
//     return list[Math.floor(Math.random()*list.length)];
// };

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const plotText =(p,c)=>{
    ctx.fillStyle = 'white';
    ctx.font = '18px Courier New';
    ctx.fillText(
        `[${c}]:(${p.x},${p.y})`,
        p.x+10,p.y-3,
    );
};

const circle =(p,w)=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y, w*1.5, 0, Math.PI*2, false);
    ctx.fill();
};

// clamp(x2, x1-offset,x1+offset),
// clamp(y2, y1-offset,y1+offset),
const arrow=(p0, p1, w, color, last, count)=>{

    ctx.strokeStyle = color;
    ctx.fillStyle = color;

    // line
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineWidth = w;
    ctx.stroke();

    // points
    circle(p0,w);

    if(last){
        circle(p1,w);
        plotText(p1,count);
    };
    plotText(p0,count+1);
};

const hexagon = [
    {x:50, y:50},
    {x:150, y:150},
    {x:300, y:30},
    {x:400, y:130},
    {x:425, y:250},
    {x:250, y:270},
    {x:350, y:325},
    {x:100, y:350},
];

const colors = [
    'orange',
    'yellow',
    'red',
    'green',
    'blue',
];

const draw=()=>{
    spiderCanvas.width = width; // px
    spiderCanvas.height = height;

    var p0;
    var colorIndex = -1;
    // do in opposite order to avoid unneccsary render
    Object.keys(hexagon).reverse().forEach(point=>{
        if(!p0){
            p0 = hexagon[point];
        } else{
            // loop through colors         
            colorIndex = (colorIndex + 1) % colors.length;
            // plot point!
            arrow(p0, hexagon[point], 5,colors[colorIndex], point == 0, Number(point));
            p0 = hexagon[point];
        };
    });
};

draw();
// window.addEventListener('resize',draw);