import styles from './AdicionaTask.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


interface AdicionaTaskProps{
    adicionaTask: (texto: string) => void;
}


export const AdicionaTask: React.FC<AdicionaTaskProps> = ({adicionaTask}) => {

    const [taskText, setTaskText] = useState('');

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            adicionaTask(taskText);
            console.log(taskText);
            setTaskText('');
        }
    };

        
    return (
        
        <div className={styles.container}>
            <input
                className={styles.input}
                type='text'
                placeholder='Adicione uma nova tarefa'
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
            
            <button
                className={styles.button} 
                type='submit'
                onClick={handleAddTask}
                >
                Criar <FontAwesomeIcon icon={faPlus} />
            </button>
            
        </div>
    )
}