addEventListener('DOMContentLoaded' , (event) => {
    var game = document.getElementById("game");
    var stat = document.getElementById("status");
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var walls = document.getElementsByClassName("boundary");
    // Starting Event
    start.addEventListener('mouseover',fn1)

    start.addEventListener('click',fn4)
    // Ending Event
    end.addEventListener('mouseover',fn2)
    // Touching Walls
    for(var i=0 ; i < walls.length ; i++){
       walls[i].addEventListener('mouseover',fn3)
    }

    var state = 'pause';
    var wall ;
    function fn1(){
        state = 'play';
        stat.textContent = 'You started,your score is: ';
    }
    function fn2(){
        stat.textContent = 'You won , your score is :';
    }
    function fn3(){
        wall = 'True';
       for(var i = 0 ; i < walls.length-1 ; i++){
        walls[i].style.backgroundColor = '#ff8888';
        stat.textContent = 'You lost , your score is :'
       }
    }
    function fn4(){
        stat.textContent = 'You restarted , your score is: 0';
    }
    var arr = ['pause' , 'play'];

    if (state = 'play'){
        for(var i=0 ; i < walls.length-1 ; i++){
            walls[i].addEventListener('mouseover',fn3)
         }
        }

//    function winning(){

//    }
//    function losing(){

//    }
//    function game(state){

//    }





})



