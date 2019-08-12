var vp = document.getElementById("villaPlatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOk: false
}

var vaca = {
  url: "vaca.png",
  cargaOk: false
}

var pollo = {
  url: "pollo.png",
  cargaOk: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOk: false
}

var cantidad = aleatorio (1, 5);


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo () {
  fondo.cargaOk = true;
  dibujar ();
}

function cargarVaca () {
  vaca.cargaOk = true;
  dibujar ();
}

function cargarPollo () {
  pollo.cargaOk = true;
  dibujar ();
}

function cargarCerdo () {
  cerdo.cargaOk = true;
  dibujar ();
}

function dibujar () {
  if (fondo.cargaOk) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOk) {
    for (v=0; v < cantidad; v++) {
      var x = aleatorio (0, 6);
      var y = aleatorio (0, 6);
      x = x * 65;
      y = y * 65;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if (pollo.cargaOk) {
    for (v=0; v < cantidad; v++) {
      var x = aleatorio (0, 6);
      var y = aleatorio (0, 6);
      x = x * 65;
      y = y * 65;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

  if (cerdo.cargaOk) {
    papel.drawImage(cerdo.imagen, 200, 200);

    var teclas = {
      UP: 38,
      DOWN: 40,
      LEFT: 37,
      RIGHT: 39
    };
    
    document.addEventListener("keydown", dibujarTeclado);

    function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
      lienzo.beginPath();
      lienzo.strokeStyle = color;
      lienzo.lineWidth = 3;
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
    }

    function dibujarTeclado(evento) {
      var colorcito = "#FAA";
      var movimiento = 5;
      
      switch(evento.keyCode) {
        case teclas.UP:
          dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
          y = y - movimiento;
        break;
    
        case teclas.DOWN:
          dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
          y = y + movimiento;
        break;

        case teclas.LEFT:
          dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
          x = x - movimiento;
        break;
    
        case teclas.RIGHT:
          dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
          x = x + movimiento;
        break;
      }
    }
  }
}


function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor (Math.random() * (max - min + 1)) + min
  return resultado;
}

