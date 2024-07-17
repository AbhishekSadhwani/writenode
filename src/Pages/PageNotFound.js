import pagenotfound from '../assets/pagenotfound.jpg';
import { useCustomTitle } from '../hook/useCustomTitle';


export const PageNotFound = () => {
  
  useCustomTitle("Page Not Found");
  
  return (
    <section className='pnf'>
        <p>404 / Page Not Found</p>
        <img src={pagenotfound} alt="" />
        <button>Back To Home</button>
    </section>
  )
}
