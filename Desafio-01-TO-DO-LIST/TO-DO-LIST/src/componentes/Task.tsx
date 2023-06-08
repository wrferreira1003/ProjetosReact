import styles from './Task.module.css';
import React, {useState} from 'react';
import { App } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export interface TaskData{
    id: number;
    title: string;
    completed: boolean;
  }
  

  interface TaskProps {
    tasks: TaskData[];
    completaTask:(id: number) => void;
    excluirTarefas:(id: number) => void;
  }

export function Task({ tasks, completaTask,excluirTarefas }: TaskProps) {


    return (
        <div className={styles.task}>
            
            <div className={styles.taskHeader}>
                
                <div className={styles.taskTarefa}>
                    <span className={styles.tarefaCriadatexto}>Tarefas Criadas:</span>
                    <span className={styles.tarefaCriadanumero}>{tasks.length}</span>
                </div>
                
                <div className={styles.taskConcluida}>
                    <span className={styles.tarefaConcluidaTexto}>Concluídas:</span>
                    <span className={styles.tarefaConcluidaNumero}>
                    {tasks.filter(task => task.completed).length} de {tasks.length}
                     </span>
                </div>
            
            </div>
            
            <div className={styles.tarefa}>
                
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id} 
                            className={task.completed ? styles.completed : ''}>
                            
                        <input 
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => completaTask(task.id)}
                        />
                        {task.title}
                        <button 
                            onClick={() => excluirTarefas(task.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        </li>
                    ))}
                </ul> 
            
            </div>  
        </div>
    );
}


