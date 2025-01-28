let input = document.getElementById('input');
let tarefas = document.getElementById('tarefas');
let contador = 0;

function adicionar(){
    inputValue = input.value;

    if( inputValue !== "" && inputValue !== null && inputValue !== undefined){
        contador ++;
        tarefas.innerHTML +=   
        `<div class="tarefa" id="tarefa${contador}" >
            <button onclick="remover(${contador})" class="remover">Remover</button>
            <p id="p${contador}">${inputValue}</p>
            <button onclick="feita(${contador})" class="feita" id="feita${contador}">Feita</button>
        </div>`;

        input.value = "";
        input.focus();
    } else{
        input.placeholder = "Preencha Corretamente";
        input.focus();
    }
}

function remover(x){
    let task = document.getElementById(`tarefa${x}`);
    task.remove();
}

function feita(y){
    let feita = document.getElementById(`feita${y}`);
    let feitaValue = feita.innerHTML;
    let tarefas = document.getElementById(`p${y}`);
    
    if(feitaValue === "Feita"){
        tarefas.style.textDecoration = "line-through";
        feita.innerHTML = "Desfazer";
    }else{
        tarefas.style.textDecoration = "none";
        feita.innerHTML = "Feita";
    }
}