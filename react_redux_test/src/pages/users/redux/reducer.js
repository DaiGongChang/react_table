const defaultState = {
    inputValue: 'please input something',
    list:[]
}

export default (state=defaultState, action)=>{
    if(action.type === 'change_input'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if(action.type === 'delete_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        // newState.inputValue = ''
        return newState
    }

    if(action.type === 'get_list'){
        let newState = JSON.parse(JSON.stringify(state))
        // newState.list.splice(action.index, 1)
        // console.log(action);
        newState.list = action.data.data.list
        // newState.inputValue = ''
        return newState
    }

    return state
}