import { Header} from './componentes/Header';
import {AdicionaTask} from './componentes/AdicionaTask';
import {Task, TaskData} from './componentes/Task';
import './global.css';
import { useState } from 'react';



export const App: React.FC = () => {
  
  const [tarefas, setTarefas] = useState<TaskData[]>([]);

  const adicionaTask = (titulo: string) => {
    setTarefas((prevTarefas) => [
      { id: Date.now(), title: titulo, completed: false },
      ...prevTarefas
    ]);
  };

  const completaTask = (id: number) => {
    setTarefas((prevTarefas) => 
      prevTarefas.map((tarefa) => 
      tarefa.id === id? {...tarefa, completed:!tarefa.completed} : tarefa));
      };

  const excluirTarefasTask = (id: number) => {
    setTarefas((excluirTarefas) => 
          excluirTarefas.filter((tarefa) => 
          tarefa.id!== id));
      };

  


return (
    
  <div>
    <Header />
   
    <AdicionaTask adicionaTask={adicionaTask} />


    <main>
    {/* Passamos para o componente Task o estado da tarefa e a função 
    que verifica se esta concluido ou não*/}
    <Task 
      tasks={tarefas} 
      completaTask={completaTask}
      excluirTarefas={excluirTarefasTask}
      />
  
    </main>
    
  
  
  </div>
  
    )
}


