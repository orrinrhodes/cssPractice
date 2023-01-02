const cssPath = './css/';
const jsPath = './js/';
const cssFiles = {
    palette: cssPath+'palette.css',
    grid: cssPath+'grid.css',
    spider: cssPath+'spider.css',
};
const jsFiles = {
    manager: jsPath+'cellManager.js',
};

// vanilla js has no access to file system ;((

function loadFiles(){
    for(file in cssFiles){
        const path = cssFiles[file];
        const head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        // link.id = x;
        // link.type = 'text/css';
        // link.media = 'all';
        link.rel = 'stylesheet';
        link.href = path;
        head.appendChild(link);
        console.log(path, 'loaded!');
    };
    for(file in jsFiles){
        const path = jsFiles[file];
        var script = document.createElement('script');
        script.src = path;
        document.body.appendChild(script);
        console.log(path, 'loaded!');
    };
};


document.addEventListener('DOMContentLoaded', ()=> {
    loadFiles();
});