import { useParams } from "react-router-dom";
import { Post, posts } from "../data"
import { useEffect, useState } from "react";
import _ from 'lodash'

const EditPost = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post>()
    const [title, setTitle] = useState<string>()
    const [content, setContent] = useState<string>()

    useEffect(() => {
        const currentPost = posts.find(p => p.id === Number(id))
        setPost(currentPost)
        if (!_.isEmpty(currentPost)) {
            setTitle(currentPost.title)
            setContent(currentPost.content)
        }
    }, [])

    const onSubmit = () => {
        console.log("Passed Data:", post)
        console.log("--------xxx--------")
        console.log("Submitted Data", { ...post, title, content })
    }

    return (
        <div style={{ display: "flex", gap: "4px", margin: "20px" }}>
            <input value={title || ""} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={content || ""} onChange={(e) => setContent(e.target.value)} />
            <button onClick={onSubmit}>EDIT</button>
        </div>
    );
}

export default EditPost