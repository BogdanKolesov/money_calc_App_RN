import React from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder } from '../../atoms';
import { ActionInputItem } from '../../molecules';

const Home = () => {
    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Остаток средств' />
            <Remainder />
            <NumberInput placeholder='32000' inputTitle='Всего средств' />
            <NumberInput placeholder='20' inputTitle='Количество дней' />
            <Button>Редактировать</Button>
            <ActionInputItem add />
            <ActionInputItem />
        </AppContainer>
    );
}


export default Home;
