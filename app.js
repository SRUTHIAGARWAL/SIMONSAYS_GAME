let btn=document.querySelector('.btn');
let p=document.querySelector('p');
let started=false;
let level=0;
let userseq=[];
let gameseq=[];
let btns=['one','two','three','four'];
document.addEventListener("keypress",()=>{
    if(started==false){
        console.log("key was pressed")
        started=true;
        levelup();
    }
});

function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
    console.log("button was flashed");
}
function restart(){
       started=false;
        level=0;
        gameseq=[];
        userseq=[];
}

function levelup(){
    userseq=[];
    level++;
    p.innerText=`LEVEL ${level}`;
    let randomcolor=Math.floor(Math.random()*4);
    let randbtncolor=btns[randomcolor];
    let randbtn=document.querySelector(`.${randbtncolor}`);
    btnflash(randbtn);
    gameseq.push(randbtn);
}
function check(i){  
        if(gameseq[i]===userseq[i])
            {if(gameseq.length==userseq.length)
              {  setTimeout(levelup,1000);}
            }
            else{
                p.innerHTML=`GAME OVER <b> your score is ${gameseq.length}<b> <br> press any key to restart`;
                document.addEventListener("keypress",restart()
                );
            }
}
function btnpress(){
    console.log(this);
    let btn=this;
    btnflash(btn);
    userseq.push(btn);
    check(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

