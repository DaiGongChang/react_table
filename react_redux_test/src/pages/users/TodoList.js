import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

function TodoList({inputValue, data, changeInputValue, cliBtn, deleteItem,getList}){
    useEffect(()=>{
        getList()
    },[])

    return (
        <>
            <div style={{margin:'10px'}}>
                <input 
                    value={inputValue}
                    style={{marginRight:'5px', width:'300px'}}
                    onChange={changeInputValue}
                />
                <button onClick={cliBtn}>提交</button>
            </div>
            <div>
                <ul>
                    {
                        data.map((item, index)=>{
                            return <li key={index} onClick={()=>{deleteItem(index)}}>{item}</li>
                        }
                        )
                    }
                </ul>
            </div>
        </>
    )
}

const mapStateToProps = ({reducer})=>{
    return {
        inputValue: reducer.inputValue,
        data: reducer.list
    }
}

const dispatchToProps = (dispatch)=>{
    return {
        changeInputValue(e){
            let action = {
                type:'change_input',
                value:e.target.value
            }
            dispatch(action)
        },
        cliBtn(){
            let action = {
                type:'add_item'
            }
            dispatch(action)
        },
        deleteItem(index){
            let action = {
                type: 'delete_item',
                index
            }
            dispatch(action)
        },
        getList(){
            axios.get('http://rap2api.taobao.org/app/mock/277051/getList')
            .then((res)=>{
                const data = res.data
                let action = {
                    type: 'get_list',
                    data
                }
                dispatch(action)
            })
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(TodoList)