import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder, Row } from '../../atoms';
import { ActionInputItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [money, setMoney] = useState(0);
    const [days, setDays] = useState(0);
    const [plusInput, setPlusInput] = useState(0);
    const [minusInput, setMinusInput] = useState(0);
    const [savedDefaultValue, setSavedDefaultValue] = useState({
        money: 0,
        days: 0,
        dayMoney: 0,
        date: null
    });
    const [itemsArray, setItemsArray] = useState([]);


    const setDefaultValue = async () => {
        const defaultValue = {
            money: money,
            days: days,
            dayMoney: (Number(money) / Number(days)).toFixed(2),
            date: new Date()
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

    const addToArray = async (value) => {
        let date = (new Date()).toString()
        if (value !== 0) {
            await setItemsArray(
                [...itemsArray,
                {
                    value: value,
                    time: date
                }
                ]
            )

        } else {
            console.log('Ошибка в addToArray')
        }
    }


    const setItemsToArray = async (value) => {
        try {
            await addToArray(value)
            const itemArray = itemsArray;
            await AsyncStorage.setItem("itemArray", JSON.stringify(itemArray));
            console.log(itemArray)
        } catch (error) {
            console.log(error);
        }
    };

    const clearItemsArray = async (value) => {
        try {
            await AsyncStorage.setItem("itemArray", JSON.stringify([]));
        } catch (error) {
            console.log(error);
        }
    };

    const getItemsFromArray = async () => {
        try {
            const savedItemsArrayValue = await AsyncStorage.getItem("itemArray");
            const currentItemsArrayValue = JSON.parse(savedItemsArrayValue);
            await setItemsArray(currentItemsArrayValue)
        } catch (error) {
            console.log('Ошибка в getItemsFromArray');
        }
    };

    const setValuesToTop = async () => {
        await setDefaultValue()
        await getDefaultValue()
        setEdit(!edit)
    }

    const setPostValues = async (value) => {
        await setItemsToArray(value)
    }

    useEffect(() => {
        getItemsFromArray()
        getDefaultValue()
    }, []);




    return (
        <AppContainer>
            <DevLabel />
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

            <ActionInputItem onChangeText={setPlusInput} onPress={() => setPostValues(plusInput)} add />
            <ActionInputItem onChangeText={setMinusInput} onPress={() => setPostValues(-(minusInput))} />
            <Button notOk onPress={() => clearItemsArray()} >Очистить архив</Button>
        </AppContainer>
    );
}


export default Home;
