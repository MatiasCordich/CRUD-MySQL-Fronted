import styled from "styled-components";

export const ItemContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;

`
export const Table = styled.table`
    border: 2px dotted var(--headline);
    border-radius: 0.7rem;
    max-width: 90rem;
    width: 95%;
    padding: 2rem 0;
`
export const TableHead = styled.thead`
`
export const TableRow = styled.tr`
    text-align: center;
`
export const TableTitle = styled.th`
    color: var(--headline);
    padding: 2rem 0;
`
export const TableBody = styled.tbody``
export const TableData = styled.td`
    color: var(--paragraph);
    font-weight: 500;
`
export const TableButtons = styled.td`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media (min-width: 990px) {
    flex-direction: row;
  }

`
export const ButtonDelete = styled.button`
    font-size: 1.8rem;
    color: var(--button-text);
    background-color: var(--light-blue);
    padding: 1rem;
    border-radius: 0.4rem;
`
