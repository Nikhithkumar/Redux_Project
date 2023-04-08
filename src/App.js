
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import AllNotes from './Components/AllNotes';

import NotesFrom from './Components/NotesFrom';

import UpdateNote from './Components/UpdateNote';


function App() {
  
  return (
    <div className='app' >
       <h1>React Notes Form</h1>
    <BrowserRouter>
     <Routes>
    
      <Route path='/' element={<NotesFrom/>}/>
      <Route path='/AllNotes' element={<AllNotes/>}/>
      <Route path='/UpdateNote' element={<UpdateNote/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}
export default App;
