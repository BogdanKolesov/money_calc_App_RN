import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { Icon } from '../atoms';

const ExpensesItem = ({ moneyArray }) => {
    return (
        moneyArray.reverse().map((item, index) => {
            return (
                <ExpensesItemContainer value={item.value} key={item.time + item.value + index}>
                    <ExpensesItemContent>
                        <ExpensesItemDate>{item.time}</ExpensesItemDate>
                        <ExpensesItemCash>{item.value}</ExpensesItemCash>
                    </ExpensesItemContent>
                    <ExpensesItemButtons>
                        <Icon add>
                            <Ionic name='pencil' style={{ fontSize: 22, }} />
                        </Icon>
                        <Icon>
                            <Ionic name='md-trash-outline' style={{ fontSize: 22, }} />
                        </Icon>
                    </ExpensesItemButtons>
                </ExpensesItemContainer>
            )
        })
    );
}


export default ExpensesItem;

const ExpensesItemContainer = styled.View`
    position: relative;
    width: 100%;
    flex-direction: row
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    border-bottom-color: ${props => props.value > 0 ? 'green' : 'red'};
    border-bottom-width: 0.5px;
    padding-bottom: 10px;
`

const ExpensesItemContent = styled.View`
    width: 70%;
`

const ExpensesItemButtons = styled.View`
    flex-direction: row;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;
`
const ExpensesItemDate = styled.Text`
    font-size: 14px;
    color: black;
    font-family: Roboto_100Thin;
    letter-spacing: 0.6px;
`

const ExpensesItemCash = styled.Text`
    font-size: 22px;
    color: black;
    font-family: Roboto_400Regular;
    letter-spacing: 1.1px;
`