const botones = document.querySelectorAll(".abrir, .cerrar");
const navegacion = document.querySelector(".hamb");
const bird = document.querySelector("#bird");

/*
for(var i = 0; i < botones.length; i++) {
	botones[i].addEventListener("click", function() {
	navegacion.classList.toggle("desplegado")
});
}

for(var boton in botones) {
	boton.addEventListener("click", function() {
	navegacion.classList.toggle("desplegado")
});
}
*/

//OTRA OPCION MAS UTIL EN ESTE CASO//
botones.forEach(boton => {
	boton.addEventListener("click", function(){
		navegacion.classList.toggle("desplegado");
		bird.classList.toggle("blur");
	})
})




