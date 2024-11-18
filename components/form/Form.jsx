//importo lo useState
import { useState } from "react";

//importo lo stile
import style from "./Form.module.css"

//importo i post
import posts from "../../data/posts";

//creo il componente Form
export default function Form() {
    const [initialPosts, setInitialPosts] = useState(posts)
    const [newPosts, setNewPosts] = useState('')

    function addPostTitle(e) {
        e.preventDefault()

        setInitialPosts([...initialPosts, newPosts])
        setNewPosts('')
    }

    //eseguo il return
    return (
        <section>
            <form onSubmit={addPostTitle}>

                <input type="text" placeholder="Inserisci il titolo" className={style.placeholder} value={newPosts} />

                <button className={style.formBtn} type="submit" id="button">INVIA</button>
            </form>
        </section>
    )
}