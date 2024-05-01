
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //define una variable para una imagen nueva
	img_imgTag.onload = uploadimg; // establece una función para cargar la variable
	img_imgTag.src = img_image;   // carga la imagen
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Escribe el código para obtener el evento key-pressed
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//Escribe el código para verificar el tipo de tecla que se presionó
	{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("aplhabet key")

		numberkey()
		document.getElementById("d2").innerHTML="You pressed symbol or other key";
		console.log("number key")

		arrowkey();
		document.getElementById("d3").innerHTML="You pressed symbol or other key";
		console.log("arrow key")

		specialkey();
		document.getElementById("d4").innerHTML="You pressed symbol or other key";
		console.log("special key")

		otherkey();
		document.getElementById("d5").innerHTML="You pressed symbol or other key";
		console.log("other key")
	}
	}


function aplhabetkey()
{
	
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
