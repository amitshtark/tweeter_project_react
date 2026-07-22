import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import Navbar from "./components/Navbar.jsx"
import { TweetsProvider } from "./context/TweetsContext.jsx";

function App() {
  return (
    
    <TweetsProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </TweetsProvider>
    
  );
}

export default App
