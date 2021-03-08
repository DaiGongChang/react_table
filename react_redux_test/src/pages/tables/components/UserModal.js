import React, { useState,useEffect } from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import { format } from 'prettier';

const UserModal = (props)=>{
    const {isVisiable, onCancel, record, onFinish} = props
    const [form] = Form.useForm();

    useEffect(()=>{
        if (record === undefined){
            form.resetFields()
        }else{
            form.setFieldsValue(record)
        }
    },[isVisiable])
    
    const onFinishFailed = () => {
        console.log('Failed:', errorInfo);
    };

    const onOk = ()=>{
        form.submit()
    }

    return (
        <Modal forceRender title="Basic Modal" visible={isVisiable} onOk={onOk} onCancel={onCancel}>
            {/* {console.log(record)} */}
            <Form
                name="basic"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                //放值
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Create_Time"
                    name="create_time"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default UserModal