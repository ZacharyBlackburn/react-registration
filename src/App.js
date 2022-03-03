import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import RegistrationPage from './pages/RegistrationPage';

// background image
import background from './assets/person-typing.jpg' // image from Kaitlyn Baker https://unsplash.com/photos/vZJdYl5JVXY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink

function App() {
  return (
    <div className="App" style={{ backgroundImage:`url(${background})` }}>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
