import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Remainder = ({ days, money, dayMoney, moneyMinus }) => {
    return (
        <RemainderContainer>
            <RemainderTitle>Бюджет:</RemainderTitle>
            <RemainderText money={money} moneyMinus={moneyMinus} days={days}>{money - (-moneyMinus)} на {days} суток</RemainderText>
            <RemainderText moneyMinus={moneyMinus}>Потрачено: {moneyMinus} </RemainderText>
            <RemainderText money={money} days={days}>Было: {money} на {days} суток</RemainderText>
            <RemainderText big>На день {(Number(money) - Number(moneyMinus)) / Number(days)}</RemainderText>
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
