import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder, Row } from '../../atoms';
import { ActionInputItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const [edit, setEdit] = useState(false);
    const [money, setMoney] = useState(0);
    const [days, setDays] = useState(0);
    const [dayMoney, setDayMoney] = useState(0);

    getMonyey = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@key')
            return jsonValue != null ? JSON.parse(jsonValue) : null
        } catch (e) {
            // read error
        }

        console.log('Done.')

    }

    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Остаток средств' />
            <Remainder money={money} days={days} dayMoney={dayMoney} />
            <Text>
            </Text>
            {
                edit ?
                    (<>
                        <NumberInput defaultValue={money} editable={edit} placeholder='Введите количество денег...' inputTitle='Всего средств' />
                        <NumberInput defaultValue={days} editable={edit} placeholder='Введите количество дней...' inputTitle='Количество дней' />
                        <Row>
                            <Button ok minified onPress={() => setEdit(!edit)} >Ок</Button>
                            <Button notOk minified onPress={() => setEdit(!edit)} >Не ок</Button>
                        </Row>
                    </>)
                    :
                    <>

                        <Button onPress={() => setEdit(!edit)} >Редактировать</Button>
                    </>
            }
            <ActionInputItem add />
            <ActionInputItem />
        </AppContainer>
    );
}


export default Home;
