import data from "../../services/data";
import {BLOCK_QR_APPEARING, BLOCK_ELEMENT_APPEARING, CHANGE_LANGUAGE} from '../../actionsTypes'

const initialState = {
    followingCoords: data.followingCoords,
    language: 'ge',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case  BLOCK_QR_APPEARING:
        case  BLOCK_ELEMENT_APPEARING: {
            const {followingId} = action.payload.data;
            const {followingCoords} = state;
            followingCoords.map((value)=>{
                if(value.id === followingId ){
                    value.appearing = false
                }
                return value
            });
            return {
                ...state,
                followingCoords: [...followingCoords],
            }
        }

        case CHANGE_LANGUAGE: {
            const {language} = action.payload.data;
            return {
                ...state,
                language
            }
        }



        default: {
            return state;
        }
    }
}
