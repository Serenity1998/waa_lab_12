import { useParams } from "react-router-dom";
import { Post, posts } from "../data"
import { useEffect, useState } from "react";
import _ from 'lodash'

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post>()

    useEffect(() => {
        setPost(posts.find(p => p.id === Number(id)))
    }, [posts])

    return (
        <div>
            <h1>Title: {post?.title || "No title"}</h1>
            <p>Content: {post?.content || "No content"}</p>
            {!_.isEmpty(post) && <a href={`${post.id}/edit`}>Edit</a>}
            <br />
            <a href="/posts">Back to Posts List</a>
        </div>
    );
}

export default PostDetails