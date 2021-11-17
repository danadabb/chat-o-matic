import styled from 'styled-components';

const Button = styled.button`
    border-radius: 5px;
    background-color: #2196F3;
    color: white;
    border: none;
    padding: 10px;
    font-weight: 500;
    &:hover {
        filter: brightness(0.85);
    }
`;

export default Button;
