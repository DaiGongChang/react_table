import React, { useEffect, useState } from 'react';
import { Table, Space, Popconfirm, message,Button} from 'antd';
import ProTable, { TableDropdown, ProColumns, ActionType } from '@ant-design/pro-table';
import {connect} from 'react-redux'
import * as actions from './redux/action'
import UserModal from './components/UserModal'

const index = ({data, meta, getList, editValue, deleteValue, addValue})=>{

    const [isVisiable, setVisiable] = useState(false)
    const [record, setRecord] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        getList()
        // setLoading(true)
    },[])
    useEffect(()=>{
      // console.log('231313131313',loading);
      setLoading(!loading)
    },[data])

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Create_Time',
          dataIndex: 'create_time',
          key: 'create_time',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>{handleEdit(record)}}>Edit</a>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={()=>{confirm(record.id)}}
                okText="Yes"
                cancelText="No"
            >
                <a>Delete</a>
            </Popconfirm>
            </Space>
          ),
        },
      ];

    const handleEdit = (record)=>{
        setRecord(record)
        setVisiable(true)
    }

    const confirm = async (id)=>{
      const res = await deleteValue(id)
      setLoading(true)
      const test = await getList()
      setLoading(false)
    }

    const onCancel = ()=>{
        setVisiable(false)
    }

    const onFinish = async (values) => {
      let id = 0
      if(record){
        id = record.id
      }
      if(id){
        const res = await editValue(values, id)
      }else{
        const res = await addValue(values)
      }
      setVisiable(false)
      setLoading(true)
      const test = await getList()
      setLoading(false)
    };

    const addHandler = ()=>{
       setVisiable(true)
       setRecord(undefined)
    }
    
    const requestHandler = async ({pageSize, current})=>{
      // console.log(meta);

      // const users = await getList()
      // console.log(users);
      return {
        data: data,
        success: true,
        total: meta.tatal
      }
    }
      
    return (
        <div className='list-table'>
            <Button type='primary' onClick={addHandler}>ADD</Button>
            <ProTable 
              columns={columns} 
              dataSource={data} 
              rowKey='id' 
              loading={loading}
              request={requestHandler}
              search={false}
            />
            <UserModal isVisiable={isVisiable} onCancel={onCancel} record={record} onFinish={onFinish}/>
        </div>
    )
}

const mapStateToProps = ({tableReducer})=>{
    // console.log('....',tableReducer);
    return (
        {
            data: tableReducer.data,
            meta: tableReducer.meta
        }
    )
}

export default connect(mapStateToProps, actions)(index)