import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer } from './Components';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
