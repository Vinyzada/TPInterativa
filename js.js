function getAllElementos() {
    return document.querySelectorAll('.elemento');
}

function getAllMouse() {
    return document.querySelectorAll('.mouse');
}

function selectAllName(name) {
    let elementos = getAllElementos();
    for (let e of elementos) {
        console.log(e);
        if (e.classList[1] != name) {
            e.style.opacity = 0.3;
        }
        else {
            e.style.opacity = 1;
            e.classList.remove('naoMetal');
            e.classList.remove('metal');
        }
    }
}

function getAllElementosClas() {
    const clas = getAllMouse();
    console.log(clas);
    for (let e of clas) {
        e.addEventListener('mouseover', function () {
            const familia = e.classList[1];
            selectAllName(familia);
        })
    }
}

function foraMetais() {
    let elementos = getAllElementos();
    for (let e of elementos) {
        e.style.opacity = 1;
        if (e.classList[1] === 'alcalino') {
            e.classList.add('metal');
            if (e.id === 'H') {
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }

        }
        if (e.classList[1] === 'metaisTransicao') {
            e.classList.add('metal');
            if (e.classList[2] === 'mouse') {
                e.classList.remove('metal');
            }

        }
        if(e.classList[1] === 'familiaBoro'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'familiaCarbono'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'familiaNitrogenio'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'calcogenio'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if (e.classList[1] === 'halogenio') {
            e.classList.add('naoMetal');
            if (e.classList[2] === 'mouse') {
                e.classList.remove('naoMetais');
            }
        }
    }
}
getAllElementosClas();

function temperatura() {
    const tempbar = document.getElementById("tempBar");
    const temperatura = document.getElementById("temperatura");
    tempbar.addEventListener("input", function () {
        temperatura.value = tempbar.value + "°C";
    });
}
temperatura();


