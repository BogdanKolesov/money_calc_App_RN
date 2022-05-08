import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { AppContainer, Button, DevLabel, NumberInput, PageTitle, Remainder, Row } from '../../atoms';
import { ActionInputItem } from '../../molecules';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ ex }) => {
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
    const [moneyMinus, setMoneyMinus] = useState(0);


    const setDefaultValue = async () => {
        await calcBudget()
        const defaultValue = {
            money: Number(money),
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
        let date = (new Date())
        if (value !== 0) {
            await setItemsArray(
                [...itemsArray,
                {
                    value: Number(value),
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
            const itemArray = itemsArray;
            await addToArray(value)
            await AsyncStorage.setItem("itemArray", JSON.stringify(itemArray));
            await calcBudget()
        } catch (error) {
            console.log(error);
        }
    };

    const clearItemsArray = async (value) => {
        try {
            await AsyncStorage.setItem("itemArray", JSON.stringify([]));
            await AsyncStorage.setItem('moneyMinusStorage', JSON.stringify(0))
            await setValuesToTop()
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
        await calcBudget()
    }

    useEffect(() => {
        calcBudget()
        getItemsFromArray()
        getDefaultValue()
    }, []);

    const calcBudget = () => {

        const setToMoneyMinus = async () => {
            const filtredArray = itemsArray.filter(item => new Date(item.time) >= new Date(savedDefaultValue.date));
            const result = filtredArray.map(item => item.value).reduce((prev, curr) => prev + curr, 0)
            try {
                await AsyncStorage.setItem("moneyMinusStorage", JSON.stringify(result));
            } catch (error) {
                console.log(error);
            }
        }
        const getFromMoneyMinus = async () => {
            try {
                const minus = await AsyncStorage.getItem("moneyMinusStorage");
                const currentMoneyMinus = JSON.parse(minus);
                await setMoneyMinus(currentMoneyMinus)
            } catch (error) {
                console.log('Ошибка в getFromMoneyMinus');
            }
        }
        setToMoneyMinus()
        getFromMoneyMinus()
        console.log(moneyMinus)
    }

    return (
        <AppContainer>
            <DevLabel />
            <PageTitle title='Остаток средств' />
            <Remainder money={savedDefaultValue.money} days={savedDefaultValue.days} dayMoney={savedDefaultValue.dayMoney} moneyMinus={moneyMinus} />
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
            <Button ok onPress={() => calcBudget()}>ГЕТ ИТ</Button>
        </AppContainer>
    );
}


export default Home;
