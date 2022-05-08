import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, PageTitle } from '../../atoms';
import { ExpensesItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage'

const Expenses = () => {

    const [moneyArray, setMoneyArray] = useState([]);

    const getItemsFromArray = async () => {
        try {
            const savedItemsArrayValue = await AsyncStorage.getItem("itemArray");
            const currentItemsArrayValue = JSON.parse(savedItemsArrayValue);
            await setMoneyArray(currentItemsArrayValue)
        } catch (error) {
            console.log('Ошибка в getItemsFromArray');
        }
    };

    useEffect(() => {
        getItemsFromArray()
    }, []);

    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Архив' />
            <Button ok onPress={() => getItemsFromArray()}>Обновить</Button>
            {
                moneyArray.length !== 0 ?
                    (
                        <ExpensesItem moneyArray={moneyArray} />
                    )
                    :
                    (
                        <PageTitle>Нет данных</PageTitle>
                    )
            }
        </AppContainer>
    );
}


export default Expenses;
