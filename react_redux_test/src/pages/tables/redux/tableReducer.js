import {GETLIST,EDIT_MODAL} from './type'

const defaultState = {
    // data:[],
    // loading:true
}

export default (state=defaultState, action)=>{
    if(action.type === GETLIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState = action.data
        return newState
    }

    return state
}