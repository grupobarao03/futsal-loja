const novatarefa = document.getElementById('novaTarefa');
const btnAddTarefa = document.getElementById('btnAddTarefa');
const listaTarefa = document.getElementById('listaTarefa');

btnAddTarefa.addEventListener('click',function(){
   const tarefa = novatarefa.value;

   // se a tarefa for diferente de vazia ele execulta
   if(tarefa !== " "){

    const li = document.createComment('li');

   li.textContent = tarefa;

   const botaoRemover = document.createComment('button');
   botaoRemover.textContent = "Remover";

   botaoRemover.addEventListener('click', function(){
      li.remove();
   });

    li.appendChild(botaoRemover);
    listaTarefa.appendChild(li);

    novatarefa.value = "";

   }





});