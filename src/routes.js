import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Filme from './pages/Filme'
import Header from './componentes/Header'
import Erro from './pages/Erro'


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/filme/:id' element={<Filme/>}/>



            
            <Route path='*' element = {<Erro/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;