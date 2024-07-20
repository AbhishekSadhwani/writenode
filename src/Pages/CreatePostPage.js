import { useNavigate } from "react-router-dom";
import { addDoc } from "firebase/firestore";
import { useCustomTitle } from "../hook/useCustomTitle"
import { colRef, auth } from "../firebase/config";


export const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleForm = (event) => {
    event.preventDefault();
    
    const post = {
      name: event.target.name.value,
      description: event.target.description.value,
      author: {
        user: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    };

    addDoc(colRef, post);
    event.target.reset();
    navigate("/");
  };
  
  useCustomTitle("Create Post");

  return (
    <section className="add-post">
        <h1 className="heading">Add New Post</h1>
        <form onSubmit={handleForm} action="" className="add-form">
            <input type="text" name="name" placeholder="Title" autoComplete="off" maxLength="50" required/>
            <textarea name="description" placeholder="Description" maxLength="600" required></textarea>
            <button type="submit">Create</button>
        </form>
    </section>
  )
}
