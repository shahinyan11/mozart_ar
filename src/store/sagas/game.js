import {takeLatest, put, call, takeEvery} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {Alert, Vibration} from "react-native";

import {
    JOIN_TO_GAME_REQUEST,
    JOIN_TO_GAME_REQUEST_SUCCESS,
    JOIN_TO_GAME_REQUEST_FAIL,

    START_GAME_REQUEST,
    START_GAME_REQUEST_SUCCESS,
    START_GAME_REQUEST_FAIL,

    GET_USER_ACTIVE_GAME_REQUEST,
    GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
    GET_USER_ACTIVE_GAME_REQUEST_FAIL,

    RIDDLE_SOLVED_REQUEST,
    RIDDLE_SOLVED_REQUEST_SUCCESS,
    RIDDLE_SOLVED_REQUEST_FAIL,

    TAKE_ELEMENT_REQUEST,
    TAKE_ELEMENT_REQUEST_SUCCESS,
    TAKE_ELEMENT_REQUEST_FAIL,

    CORRECT_ELEMENT_REQUEST,
    CORRECT_ELEMENT_REQUEST_SUCCESS,
    CORRECT_ELEMENT_REQUEST_FAIL,

    UPDATE_LOGIC_RIDDLE_REQUEST,
    UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
    UPDATE_LOGIC_RIDDLE_REQUEST_FAIL,

    SET_ERROR,

    REMOVE_USER_JOINS_REQUEST,
    REMOVE_USER_JOINS_REQUEST_SUCCESS,
    REMOVE_USER_JOINS_REQUEST_FAIL,

    CUP_ACTIVATE_REQUEST,
    CUP_ACTIVATE_REQUEST_SUCCESS,
    CUP_ACTIVATE_REQUEST_FAIL,

    ELEMENT_ACTIVATE_REQUEST,
    ELEMENT_ACTIVATE_REQUEST_SUCCESS,
    ELEMENT_ACTIVATE_REQUEST_FAIL

} from "../../actionsTypes"

import NavigationService from "../../NavigationService"
import * as api from '../../api/api';
import {errorAlert} from "../../helpers";
import {showMessage} from "react-native-flash-message";
import servicesData from "../../services/data";
import i18n from "../../services/i18next";

function* startGame(action) {
    try {
        const {data} = yield call(api.startGame, action.payload.data);
        if (data['success']) {
            yield put({
                type: START_GAME_REQUEST_SUCCESS,
                payload: data
            });
            Vibration.vibrate();
            showMessage(servicesData.riddleSolvedMessage);
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: START_GAME_REQUEST_FAIL,
            payload: {data}
        })
        yield errorAlert("", data.message);
    }
}

function* riddleSolved(action) {
    try {
        const {data} = yield call(api.riddleSolved, action.payload.data);
        if (data['success']) {
            yield put({
                type: RIDDLE_SOLVED_REQUEST_SUCCESS,
                payload: data
            });
            Vibration.vibrate();
            showMessage(servicesData.riddleSolvedMessage);
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: RIDDLE_SOLVED_REQUEST_FAIL,
            payload: {data}
        })
        yield errorAlert("", data.message);
    }
}

function* updateLogicRiddle(action) {
    try {
        const {data} = yield call(api.updateLogicRiddle, action.payload.data);
        if (data['success']) {
            yield put({
                type: UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
                payload: data
            });
            Vibration.vibrate();
            showMessage(servicesData.riddleSolvedMessage);
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: UPDATE_LOGIC_RIDDLE_REQUEST_FAIL,
            payload: {data}
        })
        yield errorAlert("", data.message);
    }
}

function* joinGame(action) {
    try {
        const {data} = yield call(api.joinGame, action.payload.data);
        if (data['success']) {
            yield put({
                type: JOIN_TO_GAME_REQUEST_SUCCESS,
                payload: data
            });

            yield NavigationService.navigate('MainMenu');
        }
    } catch (e) {
        const {data} = e.response;
        yield put({
            type: JOIN_TO_GAME_REQUEST_FAIL,
            payload: {data}
        })

        yield errorAlert("", data.error.message);
    }
}

function* getUserActiveGame(action) {
    try {
        const {data} = yield call(api.getUserActiveGame, action.payload.data);
        if (data['success']) {
            yield put({
                type: GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
                payload: data
            });
        }
    } catch (e) {
        yield put({
            type: GET_USER_ACTIVE_GAME_REQUEST_FAIL,
            payload: {error: e}
        })

    }
}

function* takeElement(action) {
    try {
        const {data} = yield call(api.takeElement, action.payload.data);

        if (data['success']) {

            yield put({
                type: TAKE_ELEMENT_REQUEST_SUCCESS,
                payload: data
            });

            yield NavigationService.navigate('Rucksack')

        } else {

            yield put({type: TAKE_ELEMENT_REQUEST_FAIL});

            yield Alert.alert(
                null,
                i18n.t(`alerts.${data['error']['message']}`),
                [{
                    text: 'OK',
                    onPress: action.payload.callback
                }]
            );

        }
    } catch (e) {
        const {error} = e.response.data;
        yield put({type: TAKE_ELEMENT_REQUEST_FAIL, payload: {error: e}});
        console.log(error)
    }
}

function* activateCup(action) {
    try {
        const {data} = yield call(api.activateCup, action.payload.id);
        if (data['success']) {
            yield put({
                type: CUP_ACTIVATE_REQUEST_SUCCESS,
                payload: data
            });

            Vibration.vibrate();

            showMessage({
                message: i18n.t("notifications.cup_activated"),
                type: "info",
                duration: 5000
            });

        }
    } catch (e) {
        yield put({
            type: CUP_ACTIVATE_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* activateElement(action) {
    try {
        const {data} = yield call(api.activateElement, action.payload.id);
        if (data['success']) {
            yield put({
                type: ELEMENT_ACTIVATE_REQUEST_SUCCESS,
                payload: data
            });

            Vibration.vibrate();

            showMessage({
                message: i18n.t("notifications.element_activated"),
                type: "info",
                duration: 5000
            });

        }
    } catch (e) {
        yield put({
            type: ELEMENT_ACTIVATE_REQUEST_FAIL,
            payload: {error: e}
        });
    }
}

function* correctElement(action) {
    try {

        const {data} = yield call(api.correctElement, action.payload.id);
        if (data['success']) {
            yield put({
                type: CORRECT_ELEMENT_REQUEST_SUCCESS,
                payload: data
            });
        }

        action.payload.callback(data);

    } catch (e) {
        yield put({
            type: TAKE_ELEMENT_REQUEST_FAIL,
            payload: {error: e}
        });

        yield Alert.alert(null, 'Jemand in Ihrem Team hat dieses Element bereits', [{
            text: "OK",
            onPress: action.payload.callback
        }])

    }
}

//TEST
function* removeUserJoins(action) {
    try {
        const {data} = yield call(api.removeUserJoins, action.payload.data);
        if (data['success']) {
            yield put({
                type: REMOVE_USER_JOINS_REQUEST_SUCCESS,
                payload: data
            });

            yield NavigationService.navigate('Home')
        }
    } catch (e) {
        yield put({
            type: REMOVE_USER_JOINS_REQUEST_FAIL,
            payload: {error: e}
        })

    }
}

export default function* watcher() {
    yield takeLatest(START_GAME_REQUEST, startGame);
    yield takeLatest(RIDDLE_SOLVED_REQUEST, riddleSolved);
    yield takeLatest(JOIN_TO_GAME_REQUEST, joinGame);
    yield takeLatest(GET_USER_ACTIVE_GAME_REQUEST, getUserActiveGame);
    yield takeLatest(TAKE_ELEMENT_REQUEST, takeElement);
    yield takeLatest(CORRECT_ELEMENT_REQUEST, correctElement);
    yield takeLatest(UPDATE_LOGIC_RIDDLE_REQUEST, updateLogicRiddle);
    yield takeLatest(CUP_ACTIVATE_REQUEST, activateCup);
    yield takeLatest(ELEMENT_ACTIVATE_REQUEST, activateElement);
    //TEST
    yield takeLatest(REMOVE_USER_JOINS_REQUEST, removeUserJoins);
}
