import {CHANGE_SCREEN_ORIENTATION} from '../../actionsTypes'
import {isOriented} from "../../helpers";

const initialState = {
    oriented: isOriented(),
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_SCREEN_ORIENTATION: {

            const {oriented} = action.payload.data;
            return {
                ...state,
                oriented,
            }
        }

        default: {
            return state;
        }
    }
}
