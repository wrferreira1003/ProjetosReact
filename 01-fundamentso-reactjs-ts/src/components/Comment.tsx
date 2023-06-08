import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}



export function Comment({content, onDeleteComment}:CommentProps){


    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(

        <div className={styles.comment}>
            <Avatar hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/103967965?v=4"
                alt=''
            />

            <div className={styles.commentBox}>
                
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        
                        <strong>Wellington Ferreira</strong>
                            <time title='29 de Maio as 08:13h' 
                            dateTime="2023-05-28 06:18:30">Comentado a 1h atrás</time>

                        </div>  

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>

                    </header>
                    
                    <p> {content}</p>
                    
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>


    )
}