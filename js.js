var clicado = false;
function hide(el){
    var display = document.getElementById(el).style.display;
    document.getElementById(el).style.display = 'none';
}

function hide1(el){
    var display = document.getElementById(el).style.display;
    document.getElementById('titleacademy').style.display = "none";
    document.getElementById(el).style.display = 'none';
}

function funcao1(){
    if(!clicado){
        alert('Para remover um campo, de duplo clique nele!');
        clicado = true;
    }
}