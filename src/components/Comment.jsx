import styles from './Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/elielmeschss.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Eliel Mesch</strong>
                            <time title='11 de Maio as 11:13' dataTime="2022-05-11 08:13:00">Publicado ha 1h</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}