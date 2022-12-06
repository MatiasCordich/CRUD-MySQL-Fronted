import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { itemByIdRoute, putItemRoute } from '../../utils/APIRoutes'
import { AddForm, AddItemContainer, ButtonSubmit, FormBox, Input, InputBox, Label, FormTitle } from '../AddItem/addItemElements'

const EditItem = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const getItemById = async () => {

        const response = await axios.get(`${itemByIdRoute}/${id}`)

        console.log(response)

        const { name } = response.data.data
        const { price } = response.data.data

        setName(name)
        setPrice(price)
    }

    useEffect(() => {
        getItemById()
    }, [id])

    const updateItem = async (e) => {

        e.preventDefault()

        await axios.put(`${putItemRoute}/${id}`, {
            name: name,
            price: parseInt(price)
        })

        navigate('/')
    }


    return (
        <>
            <AddItemContainer>
                <AddForm onSubmit={updateItem}>
                    <FormBox>
                    <FormTitle>
                            Editar Item
                        </FormTitle>
                        <InputBox>
                            <Label>
                                Nombre
                            </Label>
                            <Input
                                type="text"
                                placeholder='nombre'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </InputBox>
                        <InputBox>
                            <Label>
                                Precio
                            </Label>
                            <Input
                                type="text"
                                placeholder='precio'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </InputBox>
                        <ButtonSubmit type='submit'>
                            Guardar Cambios
                        </ButtonSubmit>
                    </FormBox>
                </AddForm>
            </AddItemContainer>
        </>
    )
}

export default EditItem