import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder, Row } from '../../atoms';
import { ActionInputItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {

    const inputPlusRef = useRef()
    const inputMinusRef = useRef()

    const [isLoading, setIsLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [money, setMoney] = useState(0);
    const [days, setDays] = useState(0);
    const [savedDefaultValue, setSavedDefaultValue] = useState({
        money: 0,
        days: 0,
        dayMoney: 0
    });

    const savedItemArray = []


    const setDefaultValue = async () => {
        const defaultValue = {
            money: money,
            days: days,
            dayMoney: (Number(money) / Number(days)).toFixed(2)
        };
        try {
            await AsyncStorage.setItem("defaultValue", JSON.stringify(defaultValue));
        } catch (error) {
            console.log(error);
        }
    };

    const getDefaultValue = async () => {
        try {
            const savedDefalutValue = await AsyncStorage.getItem("defaultValue");
            const currentDefaultValue = JSON.parse(savedDefalutValue);
            await setSavedDefaultValue(currentDefaultValue)
        } catch (error) {
            console.log(error);
        }
    };


    const setItemsToArray = async () => {
        const itemArray = savedItemArray;
        try {
            await AsyncStorage.setItem("itemArray", JSON.stringify(itemArray));
        } catch (error) {
            console.log(error);
        }
    };

    const getItemsFromArray = async () => {
        try {
            const savedItemsArrayValue = await AsyncStorage.getItem("itemArray");
            const currentItemsArrayValue = JSON.parse(savedItemsArrayValue);
            await setSavedDefaultValue(currentItemsArrayValue)
        } catch (error) {
            console.log(error);
        }
    };

    const setValuesToTop = async () => {
        await setDefaultValue()
        await getDefaultValue()
        setEdit(!edit)
    }

    useEffect(() => {
        getDefaultValue()
    }, []);

    return (
        <AppContainer>
            <DevLabel />
            <Text>
                {new Date().getHours()}
            </Text>
            <PageTitle title='Остаток средств' />
            <Remainder money={savedDefaultValue.money} days={savedDefaultValue.days} dayMoney={savedDefaultValue.dayMoney} />
            {
                edit ?
                    (<>
                        <NumberInput onChangeText={setMoney} editable={edit} placeholder='Введите количество денег...' inputTitle='Всего средств' />
                        <NumberInput onChangeText={setDays} editable={edit} placeholder='Введите количество дней...' inputTitle='Количество дней' />
                        <Row>
                            <Button ok minified onPress={() => setValuesToTop()} >Ок</Button>
                            <Button notOk minified onPress={() => setEdit(!edit)} >Не ок</Button>
                        </Row>
                    </>)
                    :
                    <>

                        <Button onPress={() => setEdit(!edit)} >Редактировать</Button>
                    </>
            }
            <ActionInputItem ref={inputPlusRef} add onPress={() => savedItemArray.push(
                ...{
                    item: inputRef.current.value
                }
            )} />
            <ActionInputItem ref={inputMinusRef} />
        </AppContainer>
    );
}


export default Home;
