function  pressBtn(e){
let  inp = document.getElementById('inp').value += e;

}

function eq(){
    let inp =document.getElementById('inp');
    inp.value = eval(inp.value);
}
function Clr(){
    let inp = document.getElementById('inp');
    inp.value = inp.value.slice(0, -1);
}

function clrAll(){
    let inp = document.getElementById('inp').value = "";

}