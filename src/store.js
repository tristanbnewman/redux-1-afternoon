//Good
import { createStore, action } from "redux";

//Named it state instead of the correct 
//Second checked correct
const initialState = {
    name: "",
    category: ''
}

//Actions
export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATEGORY"

//Only passed in state instead of 'state = initialState'
const reducer = (state = initialState, action) =>{

    const {type, payload} = action
    //Did not include switch statement.
    // 
    switch (type) {
        //Original definition of types were functions and lowercase. After correction case was corrected appropriately
        case UPDATE_NAME:
            return {...state, name: payload}

        case UPDATE_CATEGORY:
            return {...state, category: payload}

        default:
            return state;
    }   
}

//Originally had below, can instead pass it to export default
// const store = createStore(reducer)

export default createStore(reducer)