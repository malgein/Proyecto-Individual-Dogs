//Dependencias
import {Routes, Route, useLocation} from 'react-router-dom';
// Estilos
import styles from './App.module.css';
//Components
import Home from './components/pages/Home/Home';
import Detail from './components/pages/Detail/Detail';
import Landing from './components/pages/Landing/Landing';
import Error404 from './components/pages/Error/Error404';
import Form from './components/pages/Form/Form';

function App() {

  const location = useLocation().pathname

  // let previusTitle = document.title 

	// window.addEventListener('blur', () =>{
	// 	previusTitle = document.title
	// 	document.title = 'No te vayas 😱, vuelve'
	// })

	// window.addEventListener('focus', () => {
	// 	document.title = previusTitle
	// })

  return (
    <div className={styles.App}>
      {/* {location!=='/' ? (<SearchBar />) : (<></>)} */}
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='*' element={<Error404 />}/>
      </Routes>
    </div>
  );
}

export default App;
