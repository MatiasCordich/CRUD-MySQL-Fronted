import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { postItemRoute } from '../../utils/APIRoutes'
import { AddForm, AddItemContainer, ButtonSubmit, FormBox, FormTitle, Input, InputBox, Label } from './addItemElements'

const AddItem = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const navigate = useNavigate()

    const saveItem = async (e) => {

        e.preventDefault()

        await axios.post(`${postItemRoute}`, {
            name: name,
            price: parseInt(price)
        })

        navigate('/')
    }
    return (
        <>
            <AddItemContainer>
                <AddForm onSubmit={saveItem}>
                    <FormBox>
                        <FormTitle>
                            Agregar Item
                        </FormTitle>
                        <InputBox>
                            <Label>
                                Nombre
                            </Label>
                            <Input
                                type="text"
                                placeholder='Nombre'
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
                                placeholder='Precio'
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </InputBox>
                        <ButtonSubmit type='submit'>
                            Guardar
                        </ButtonSubmit>
                    </FormBox>
                </AddForm>
            </AddItemContainer>
        </>
    )
}

export default AddItem