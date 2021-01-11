import {generateGuessColor} from "../../services/helpers";
import {
    JOIN_TO_GAME_REQUEST_SUCCESS,
    JOIN_TO_GAME_REQUEST_FAIL,

    GET_USER_ACTIVE_GAME_REQUEST_SUCCESS,
    GET_USER_ACTIVE_GAME_REQUEST_FAIL,

    RIDDLE_SOLVED_REQUEST_SUCCESS,
    RIDDLE_SOLVED_REQUEST,

    START_GAME_REQUEST_SUCCESS,

    CUP_ACTIVATE_REQUEST_SUCCESS,
    ELEMENT_ACTIVATE_REQUEST_SUCCESS,

    RIDDLE_SOLVED,
    START_GAME,
    GAME_OVER,
    NEW_JOIN,

    HIDE_QR_CODE,
    SOW_QR_CODE,

    SOW_MOZART,
    HIDE_MOZART,

    HIDE_ELEMENT,
    SOW_ELEMENT,

    TAKE_ELEMENT_REQUEST_SUCCESS,
    CORRECT_ELEMENT_REQUEST_SUCCESS,

    SET_CURRENT_LOCATION,
    SET_PERMISSIONS,

    BLOCK_QR_APPEARING,
    BLOCK_ELEMENT_APPEARING,
    UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS,
    REMOVE_USER_JOINS_REQUEST_SUCCESS,
    TAKE_ELEMENT,



} from '../../actionsTypes'

const initialState = {
    game: null,
    gameMembers: [],
    QRCodeData: null,
    element: null,
    visibilityMozart: false
    // currentLocation: {latitude: 0, longitude: 0}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case REMOVE_USER_JOINS_REQUEST_SUCCESS: // TEST
        case JOIN_TO_GAME_REQUEST_SUCCESS:
        case START_GAME_REQUEST_SUCCESS:
        case GET_USER_ACTIVE_GAME_REQUEST_SUCCESS: {
            const {game} = action.payload;
            // !game.collected_elements ? game.collected_elements = [] : null;
            return {
                ...state,
                game,
            }
        }
        case  UPDATE_LOGIC_RIDDLE_REQUEST_SUCCESS:
        case  RIDDLE_SOLVED_REQUEST_SUCCESS: {
            const {game} = action.payload;
            let data = {...state.game, ...game};
            return {
                ...state,
                game: data,
            }
        }

        case  CUP_ACTIVATE_REQUEST_SUCCESS: {
            const {game} = state;
            game.game_members = action.payload.game_members;

            return {
                ...state,
                game: {...game},
            }
        }
        case  ELEMENT_ACTIVATE_REQUEST_SUCCESS: {
            const {game} = state;
            game.collected_elements = action.payload.collected_elements;

            return {
                ...state,
                game: {...game},
            }
        }
        case  TAKE_ELEMENT_REQUEST_SUCCESS: {
            const {element} = action.payload;
            const {game} = state;
            game.collected_elements.push(element);
            return {
                ...state,
                game: {...game},
                element: null,
                QRCodeData: null
            }
        }
        case  CORRECT_ELEMENT_REQUEST_SUCCESS: {
            const {element, count} = action.payload;
            const {game} = state;
            game.collected_elements = game.collected_elements.map((value)=>{
                return value.id === element.id ? element : value
            });
            if(count === 0){
                game.stage += 1;
            }

            return {
                ...state,
                game: {...game},
            }
        }
        // case  SET_CURRENT_LOCATION: {
        //     const {currentLocation} = action.payload.data;
        //     return {
        //         ...state,
        //         currentLocation
        //     }
        // }
        case NEW_JOIN: {
            const {game} = state;
            const {data} = action.payload;
            game.game_members.push(data);
            return {
                ...state,
                game: {...game}
            }
        }
        case START_GAME:
        case RIDDLE_SOLVED: {
            const {data} = action.payload;
            let {game} = state;
            game = {...game, ...data.game};

            return {
                ...state,
                game: {...game}
            }
        }
        case TAKE_ELEMENT: {
            const {data} = action.payload;
            let {game} = state;
            game.collected_elements.push(data.element);

            return {
                ...state,
                game: {...game}
            }

        }
        case GAME_OVER: {
            let {game} = state;
            game.status = 'finished';
            return {
                ...state,
                game: {...game}
            }
        }
        // case RIDDLE_SOLVED_REQUEST: {
        //     let {game} = state;
        //     game.stage += 1;
        //     return {
        //         ...state,
        //         game: {...game}
        //     }
        // }
        case SOW_QR_CODE: {
            const {data} = action.payload;
            return {
                ...state,
                QRCodeData: {...data}
            }
        }

        case SOW_MOZART: {
            return {
                ...state,
                visibilityMozart: true
            }
        }

        case HIDE_MOZART: {
            return {
                ...state,
                visibilityMozart: false
            }
        }

        case BLOCK_QR_APPEARING:
        case HIDE_QR_CODE: {
            return {
                ...state,
                QRCodeData: null
            }
        }
        case SOW_ELEMENT: {
            const {data} = action.payload;
            return {
                ...state,
                element: {...data}
            }
        }
        case BLOCK_ELEMENT_APPEARING:
        case HIDE_ELEMENT: {
            return {
                ...state,
                element: null
            }
        }
        default: {
            return state;
        }
    }
}
