const novatarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddTarefa.addEventListener('click',function(){
   const tarefa = novatarefa.value;

   // se a tarefa for diferente de vazia ele execulta
   if(tarefa.trim() !== " "){

    const li = document.createComment('li');

   li.textContent = tarefa;

   const botaoRemover = document.createComment('button');
   botaoRemover.textContent = "Remover";

   botaoRemover.addEventListener('click', function(){
      li.remove();
   });

   const div = document.createElement('div');
    div.appendChild(botaoRemover);
    li.appendChild(div);

    listaTarefa.appendChild(li);

    
    novatarefa.value = "";

   }





});