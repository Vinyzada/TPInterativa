function getAllElementos() {
    return document.querySelectorAll('.elemento');
}

function getAllMouse() {
    return document.querySelectorAll('.mouse');
}


function selectAllName(name) {
    let elementos = getAllElementos();
    for (let e of elementos) {
        if (e.classList[1] != name ||e.classList[1] != name ) {
            e.style.opacity = 0.3;
            if(e.classList[1] === 'selectM'|| e.classList[1] === 'selectA'){
                e.style.opacity = 1;
            }
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
    for (let e of clas) {
        e.addEventListener('mouseover', function () {
            const familia = e.classList[1];
            selectAllName(familia);
        })
    }
}
getAllElementosClas();

function fora() {
    let elementos = getAllElementos();
    for (let e of elementos) {
        e.style.opacity = 1;
        if (e.classList[1] === 'alcalino') {
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.remove('ametal');
                e.classList.add('naoMetal');
                e.classList.add('ametal');
            }
            if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }

        }
        if (e.classList[1] === 'terroso') {
            e.classList.add('metal');
            if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
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
                e.classList.remove('ametal');
                e.classList.add('naoMetal');
                e.classList.add('ametal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'familiaCarbono'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.remove('ametal');
                e.classList.add('naoMetal');
                e.classList.add('ametal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'familiaNitrogenio'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.remove('ametal');
                e.classList.add('naoMetal');
                e.classList.add('ametal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
          
        if(e.classList[1] === 'gasNobre'){
            e.classList.add('naoMetal');
            if(e.classList[2] === 'mouse'){
                e.classList.remove('naoMetal');
            }
        }
        if(e.classList[1] === 'calcogenio'){
            e.classList.add('metal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.remove('ametal');
                e.classList.add('naoMetal');
                e.classList.add('ametal');
            }
            else if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if(e.classList[1] === 'halogenio'){
            e.classList.add('naoMetal');
            if(e.classList[2] === 'ametal' || e.classList[3] === 'ametal' ){
                e.classList.remove('metal');
                e.classList.add('naoMetal');
            }
            if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if (e.classList[1] === 'lantanideo') {
            e.classList.add('metal');
            if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
        if (e.classList[1] === 'actinideo') {
            e.classList.add('metal');
            if(e.classList[2] === 'mouse'){
                e.classList.remove('metal');
            }
        }
  
     
    }
}

function selectAllFamilia(familia) {
    let fam = getAllElementos()
    for (let f of fam) {
        console.log(f);
        if (f.classList[2] != familia) {
            f.style.opacity = 0.3;
        }
        else {
            f.style.opacity = 1;
            if(f.classList[1] === ' alcalino'){
                f.classList.remove('alcalino');
            }
        }

    }
}

metais = document.querySelector('.selectM ');
ametais = document.querySelector('.selectA');
metais.addEventListener('mouseover', function () {
    selectAllFamilia("metal");
})
ametais.addEventListener('mouseover', function () {
    selectAllFamilia("naoMetal");
})

function getAllCuriosidades() {
    return document.querySelectorAll('.curiosidades');
}


function getCuriosidadeByID(id) {
    const curiosidades = getAllCuriosidades();

    for (let c of curiosidades) {
        if (c.id == id) {
            return c;
        }
    }
    return null;
}

function selectAllBotao() {
    let elementos = getAllElementos();

    for (let e of elementos) {
        e.addEventListener("click", function () {
            const curiosidade = getCuriosidadeByID(e.id);
            console.log(curiosidade);
            curiosidade.style.display = 'block';
        });
    }
}

selectAllBotao();
//
function fechar() {
    let elementos = getAllCuriosidades();
    let btnFechar;


    for (let e of elementos) {
        btnFechar = e.children[0];
        btnFechar.addEventListener("click", function () {
            e.style.display = 'none';
        })
    }
}

fechar();


function temperatura() {
    const tempbar = document.getElementById("tempBar");
    const temperatura = document.getElementById("temperatura");
    tempbar.addEventListener("input", function () {
        temperatura.value = tempbar.value + "°C";
    });
}
temperatura();


