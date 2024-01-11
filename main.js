$("section").click(function(){
	$(this).toggleClass("on");
});

//Escrever Texto
var typed = new Typed(".text", {
    strings: ["Desenvolvedor Front End", "Desenvolvedor Backend", "Full Stack"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});