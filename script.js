const novatarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddTarefa.addEventListener('click', function() {
    const tarefa = novatarefa.value;
    // se a tarefa for diferente de vazia ele execulta
    if (tarefa) {
        const li = document.createElement('li');
        li.textContent = tarefa;
        
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener('click', function() {
            li.remove();
        });
        
        const div = document.createElement('div');
        div.appendChild(botaoRemover);
        li.appendChild(div);
        listaTarefa.appendChild(li);
        
        novatarefa.value = "";
    }
});
