import styled from 'styled-components'


//css styles for a btn
export const ButtonContainer = styled.button `
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--mainBlue);
    color: var(--mainBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2 rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &: hover{
        background: var(--mainBlue);
        color: var(--mainWhite);
    }
    &: focus{
        outline: none;
    }
`