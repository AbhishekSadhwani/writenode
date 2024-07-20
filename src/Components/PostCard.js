import { deleteDoc, doc } from "firebase/firestore";
import { colRef, auth } from "../firebase/config";

export const PostCard = ({post, toggle, setToggle}) => {

  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const handleDelete = () => {
    const docRef = doc(colRef, post.id);
    deleteDoc(docRef);
    setToggle(!toggle);
  };

  return (
    <section className="post-card">
        <p className="heading">{post.name}</p>
        <p className="content">{post.description}</p>
        <p className="control">
            <span className="author">{post.author.user}</span>
            
            {isLoggedIn && (auth.currentUser.uid === post.author.id) && <span onClick={handleDelete} className="delete"><i className="bi bi-trash"></i></span> }
            
        </p>
    </section>
  )
}
