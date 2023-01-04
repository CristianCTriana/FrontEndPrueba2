import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import FormPage from "./components/Form";
import HomePage from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage/>}></Route>
          <Route path='/form' element={<FormPage/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
