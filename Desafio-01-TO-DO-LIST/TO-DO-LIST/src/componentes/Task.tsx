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
          
          {tasks.length > 0 && 
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
          }
              
              <ul>
                  {tasks.map((task) => (
                    <div className={styles.taskContainer}> 
                        
                        <li key={task.id}>

                    
                        <div className={styles.inputContainer}>
                        
                            <input 
                                className={styles.taskCheckbox}
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => completaTask(task.id)}
                                
                            />
                            
                            <div 
                                className={task.completed ? `${styles.tarefaTexto} ${styles.tarefaCompletada}` : styles.tarefaTexto}>
                                {task.title}
                            </div>

                            <button 
                                className={styles.deleteButton}
                                onClick={() => excluirTarefas(task.id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                        </div>
                        
                        </li>
                    </div>
                  ))}
              </ul> 
              
          </div>  
        
      );
}
