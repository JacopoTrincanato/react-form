//importo lo useState
import { useState } from "react";

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

            </form>
        </section>
    )
}