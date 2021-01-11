import {
    SHOW_MODAL_ELEMENT,
    HIDE_MODAL_ELEMENT,
} from '../../actionsTypes'

const INITIAL_STATE = {
    modalElement: {
        visibility: false,
        element: null,
        action: null
    },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case SHOW_MODAL_ELEMENT: {
            const modalElement = {
                visibility: true,
                element: action.payload.element,
                action: action.payload.action,
                count: action.payload.count,
            };
            return {
                ...state,
                modalElement
            }
        }
        case HIDE_MODAL_ELEMENT: {
            const modalElement = {
                visibility: false,
                element: null,
                action: null
            };
            return {
                ...state,
                modalElement
            }
        }


        default: {
            return state
        }

    }
}
