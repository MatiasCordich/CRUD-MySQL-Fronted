import { ButtonDelete, ItemContainer, Table, TableBody, TableButtons, TableData, TableHead, TableRow, TableTitle } from './itemListElements'
import { Link } from 'react-router-dom'
import axios from 'axios'
import userSWR, { useSWRConfig } from 'swr'
import { deleteItemRoute, itemRoute } from '../../utils/APIRoutes'


const ItemList = () => {

  const { mutate } = useSWRConfig()

  const fetcher = async () => {
    const response = await axios.get(itemRoute)

    const { data } = response

    return data
  }

  const { data } = userSWR('items', fetcher)

  if (!data) return <h1>Loading...</h1>

  const deleteItem = async (itemId) => {
    await axios.delete(`${deleteItemRoute}/${itemId}`)
    mutate('items')
  }

  return (
    <>
      <ItemContainer>
        <Link to="/agregar">
          Agregar
        </Link>
        <Table>
          <TableHead>
            <TableRow>
              <TableTitle>No.</TableTitle>
              <TableTitle>Producto</TableTitle>
              <TableTitle>Precio</TableTitle>
              <TableTitle>Accion</TableTitle>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.data.map((item, index) => (
              <TableRow key={item.id}>
                <TableData>{index + 1}</TableData>
                <TableData>{item.name}</TableData>
                <TableData>$ {item.price}</TableData>
                <TableButtons>
                  <Link to={`/editar/${item.id}`}>
                    Editar
                  </Link>
                  <ButtonDelete onClick={() => deleteItem(item.id)}>
                    Eliminar
                  </ButtonDelete>
                </TableButtons>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ItemContainer>
    </>

  )
}

export default ItemList