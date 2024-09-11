import ApiFormuser from "../../middleware/api";
import { FETCH_ERROR, FETCH_PENDING, FETCH_SUCCESS } from "../action";

const intialvalue = {
    pending: false,
    user: [],
    error: null
};
const allInput = async (state = intialvalue, action) => {  
    // console.log(action.payload);
    
    switch (action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload.user
            }
        case FETCH_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default allInput;