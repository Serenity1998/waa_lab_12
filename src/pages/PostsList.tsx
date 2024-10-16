import { useNavigate } from "react-router-dom";
import { posts } from "../data"
import _ from 'lodash'

const PostsList = () => {
    const navigate = useNavigate()
    return (
        <div>
            {
                posts.map((p) => <div onClick={() => navigate(`/posts/${p.id}`)}>
                    <h1>Title: {p?.title || "No title"}</h1>
                    <p>Content: {p?.content || "No content"}</p>
                </div>)
            }
        </div>
    );
};

export default PostsList