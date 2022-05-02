import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Divider = () => {
    return (
        <DividerView />
    );
}


export default Divider;

const DividerView = styled.View`
    width: 100%;
    height: 2px;
    color: black;
    opacity: 0.6;
    /* border-radius: 2px; */
`