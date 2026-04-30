const botones = document.querySelectorAll(".button");

for (let i=0; i <botones.length; i++) {

    botones[i].addEventListener("click", function(){

        console.log("el boton fue clckeado")

    })

  }

for (let index=0; index <botones.length; index++) {

    botones[index].addEventListener("mouseover", function() {

        console.log("mouse sobre el botón");

    })

  }
