import { PostCard } from "../Components";
import { useCustomTitle } from "../hook/useCustomTitle";

export const HomePage = () => {

  useCustomTitle("Home");

  return (
    <section className="posts">
        <PostCard />
    </section>
  )
}
