const tituloCliente = document.getElementById('numbers-test');

function escreverTxt(elemento){

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    textoArray.forEach( (letra, i) =>{
        setTimeout(function(){ 
            elemento.innerHTML += letra
            elemento.style.color = 'red'
        }, 150 * i) 
    });

}

//escreverTxt(tituloCliente)


const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';
  
  sinal = " + " ;

  const updateCounter = () =>{
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;

    const increment = target / 600;
    
    if (c < target){
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }

  }
  updateCounter();
});

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage()
},5000)

function nextImage(){
  count++;
  if(count>4){
    count = 1
  }

  document.getElementById("radio"+count).checked = true;

}