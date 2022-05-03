import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Remainder = ({ days, money, dayMoney }) => {
    return (
        <RemainderContainer>
            <RemainderTitle>Остаток:</RemainderTitle>
            <RemainderText money={money} days={days}>{money} на {days} суток</RemainderText>
            <RemainderText big>На день {dayMoney}</RemainderText>

        </RemainderContainer>
    );
}

const RemainderContainer = styled.View`
    width: 100%;
`

const RemainderTitle = styled.Text`
    font-size: 18px;
    color: black;
    opacity: 0.5;
    letter-spacing: 1px;
`

const RemainderText = styled.Text`
    font-size: ${props => props.big ? '34px' : '26px'};
    color: black;
    opacity: 0.8;
    letter-spacing: 1.1px;
`

export default Remainder;
