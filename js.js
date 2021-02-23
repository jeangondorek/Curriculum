var clicado = false;
function hide(el){
    var display = document.getElementById(el).style.display;
    document.getElementById(el).style.display = 'none';
    document.getElementById('baixar').style.bottom = "-2%";
}

function hide1(el){
    var display = document.getElementById(el).style.display;
    document.getElementById('titleacademy').style.display = "none";
    document.getElementById(el).style.display = 'none';
    document.getElementById('baixar').style.bottom = "-2%";
    
}

function funcao1(){
    if(!clicado){
        alert('Para remover um campo, de duplo clique nele!');
        clicado = true;
    }
}

function baixa(){
    document.getElementById('baixar').style.display = "none";
    document.getElementById('corpo').style.height = "auto";
    window.print();

}