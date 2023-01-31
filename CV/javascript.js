
function nivelFrances () {
    document.getElementById('frances').style.display='block';
    document.getElementById('nivelfran').style.display='block';
}

function nivelAleman () {
    document.getElementById('aleman').style.display='block';
    document.getElementById('nivelale').style.display='block';
}

var x = document.getElementById("foto");
x.addEventListener("mouseover", seAgranda);
x.addEventListener("mouseout", vuelveNormal);

function seAgranda() {
  document.getElementById("foto").style="width:250px;height:250px";
}

function vuelveNormal() {
  document.getElementById("foto").style="width:180px;height:180px";
}
