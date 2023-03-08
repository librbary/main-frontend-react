import './App.css';

import Homepage from './components/home/Homepage';
import MainLayout from './pages/layouts/Layout-main-app';

function App() {
  return (
    <div className="App">
      <MainLayout>
      </MainLayout>
      <Homepage/>
    </div>
  );
} 

//Fn driven
export default App;
