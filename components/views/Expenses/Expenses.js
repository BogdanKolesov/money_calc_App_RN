import React from 'react';
import { View } from 'react-native';
import { AppContainer, DevLabel, PageTitle } from '../../atoms';
import { ExpensesItem } from '../../molecules';

const Expenses = () => {
    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Архив' />
            <ExpensesItem />
        </AppContainer>
    );
}


export default Expenses;
