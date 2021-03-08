import {GETLIST,EDIT_MODAL} from './type';
import request, {extend} from 'umi-request';
import {message} from 'antd'

const errorHandler = function(error) {
  if (error.response) {
    if(error.response.status > 400){
      message.error(error.data.message?error.data.message:error.data)
    }
  } else {
    message.error('Networ Error.')
  }
};

const extendRequest = extend({ errorHandler });


export const getList = params => async (dispatch)=>{
  return extendRequest('http://public-api-v1.aspirantzhang.com/users', {
        method: 'get',
      })
        .then(function(response) {
          const data = response
          const acton = {
              type:GETLIST,
              data
          }
          dispatch(acton)
          return false
        })
        .catch(function(error) {
          return null
        });
}

export const editValue = (values, id) => async ()=>{
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'put',
        data: values
      })
        .then(function(response) {
          message.success('edit successfuly.')
        })
        .catch(function(error) {
          message.error('edit fail.')
        });
}

export const deleteValue = (id) => async()=>{
  return request(`http://public-api-v1.aspirantzhang.com/users/${id}`, {
        method: 'delete'
      })
      .then(function(response) {
        // console.log('*****');
        message.success('delete successfuly.')
      })
      .catch(function(error) {
        // console.log('...........');
        message.error('delete fail.')
      });
}

export const addValue = (values) => async ()=>{
  return request(`http://public-api-v1.aspirantzhang.com/users`, {
        method: 'post',
        data: values
      })
      .then(function(response) {
        message.success('add successfuly.')
      })
      .catch(function(error) {
        message.error('add fail.')
      });
}