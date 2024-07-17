import { useCustomTitle } from "../hook/useCustomTitle"

export const CreatePostPage = () => {

  useCustomTitle("Create Post");

  return (
    <section className="add-post">
        <h1 className="heading">Add New Post</h1>
        <form action="" className="add-form">
            <input type="text" name="title" placeholder="Title" autoComplete="off" />
            <textarea name="description" placeholder="Description"></textarea>
            <button type="button">Create</button>
        </form>
    </section>
  )
}
