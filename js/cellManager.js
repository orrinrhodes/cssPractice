const conversate =()=>{
    const user = prompt('Who are you??','dumb');
    if(!user || user === 'dumb') { alert('user is dumb!')}
    else {
        prompt(`How you doin' ${user} 😏`);
        alert('idc go away.');
    };
};

// conversate();

// REAL

const faces = [
    'o.o',
    'O_o',
    'o_O',
    'q_q',
    '.<>.',
    'UwU',
];

const cellHTML =(face)=>{
return `
    <div class='cell'>
        <p>${face}</p>
    </div>
`;
};

const fragment =(html)=> {
    return document.createRange().createContextualFragment(html);
};

const container = document.getElementById('grid');

const spawnCell =()=>{
    const face = faces[Math.floor(Math.random()*faces.length)];
    const cell = cellHTML(face);
    const nodes = fragment(cell);
    const node = nodes.childNodes[1];
    container.appendChild(node);
};


const quantity = 25;

for(i=1; i<=quantity; i++){
    spawnCell();
};

