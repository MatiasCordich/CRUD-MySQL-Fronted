import styled from "styled-components";

export const AddItemContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const AddForm = styled.form`
    height: 40rem;
    max-width: 60rem;
    width: 95%;

    border-radius: 0.6rem;
`

export const FormTitle = styled.h1`
    color: var(--headline);
`

export const FormBox = styled.fieldset`
    height: 100%;
    border: none;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    background-color: var(--light-blue);
`
export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 2rem;
`
export const Label = styled.label`
    color: var(--headline);
    font-weight: 500;
`
export const Input = styled.input`
    padding: 1rem;
    font-family: var(--font);
    color: var(--paragraph);
    font-weight: 500;

    ::placeholder{
        color: var(--paragraph);
    }
`
export const ButtonSubmit = styled.button`
    background-color: var(--button-text);
    color: var(--white);
    padding: 1.5rem 5rem;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-family: var(--font);
    font-weight: 600;

`


