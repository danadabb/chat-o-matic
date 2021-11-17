import styled from 'styled-components';

const Input = styled.input`
    box-shadow: 0 6px 10px 0 rgb(0 0 0 / 10%);
    border: 1px solid lightgrey;
    border-radius: 8px;
    padding: 5px;
    :focus-visible {
        outline-color: lightblue;
    }
`;

export default Input;
