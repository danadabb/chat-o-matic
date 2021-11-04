import React from 'react';
import styled from 'styled-components';

type Props = {
  user: string
};

const Icon = styled.div`
    border: 2px solid lightgrey;
    border-radius: 25px;
    height: 35px;
    width: 35px;
    text-align: center;
    font-size: 1.2em;
    margin-right: 5px;
    line-height: 35px;
`;

const UserIcon = ({ user }:Props):JSX.Element => (
  <Icon>
    {user[0].toUpperCase()}
  </Icon>
);

export default UserIcon;
