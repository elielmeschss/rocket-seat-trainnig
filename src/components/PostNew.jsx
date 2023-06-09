import { Comment } from './Comment'

import styles from './Post.module.css'


export function PostNew() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/59393907?v=4" alt="" />
                    <div className={styles.authorinfo}>
                        <strong>Eliel Mesch</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio as 11:13' dataTime="2022-05-11 08:13:00">Publicado ha 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href="">jane.design/doctorcare</a></p>

                <p><a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}