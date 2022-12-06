import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemList from '../components/ItemList/ItemList'
import AddItem from '../pages/AddItem/AddItem'
import EditItem from '../pages/EditItem/EditItem'

const Router = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ItemList/>}/>
            <Route path='/agregar' element={<AddItem/>}/>
            <Route path='/editar/:id' element={<EditItem/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router