(function(){
    let colorChangeButton = document.getElementById('colorChangeButton');
    let background = document.getElementById('background');

    colorChangeButton.addEventListener('click', changeColors);

    function changeColors(){
        background.style.backgroundColor = `rgba(${randomize(255)},${randomize(255)},${randomize(255)},${randomize(1)})`;
        background.style.transitionDuration = '1s';
    }

    function randomize(value){
        return value > 1 ? Math.floor(Math.random()*255) : Math.random()*1;
    }
})();