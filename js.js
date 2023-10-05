function getAllElemntos() {
    return document.querySelectorAll('.elemento');
}

function getAllMouse() {
    return document.querySelectorAll('.mouse');
}

function selectAllName(name) {
    let elementos = getAllElemntos();
    for (let e of elementos) {
        console.log(e);
        if(e.classList[1] != name){
            e.style.opacity = 0.3;
        }
        else{
            e.style.opacity = 1;
        }
    }
}

function getAllElementosClas() {
    const clas = getAllMouse();
    console.log(clas);
    for (let e of clas) {
        e.addEventListener('mouseover', function(){
            const familia = e.classList[1];
            selectAllName(familia);
        })
        
    }

}

getAllElementosClas();

function temperatura(){
    const tempbar = document.getElementById("tempBar");
    const temperatura = document.getElementById("temperatura");
    tempbar.addEventListener("input", function() {
        temperatura.value = tempbar.value+"°C";
    });
}

temperatura();