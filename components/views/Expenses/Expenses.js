import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, PageTitle } from '../../atoms';
import { ExpensesItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Expenses = () => {

    const getDefaultValue = async () => {
        try {
            const savedDefalutValue = await AsyncStorage.getItem("defaultValue");
            const currentDefaultValue = JSON.parse(savedDefalutValue);
            console.log(currentDefaultValue);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Архив' />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />
            <ExpensesItem />

        </AppContainer>
    );
}


export default Expenses;
