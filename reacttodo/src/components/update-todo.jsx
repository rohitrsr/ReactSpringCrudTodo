import axios from "axios";
import React, { useState, useEffect } from "react"
import { Button, Form } from "semantic-ui-react";

export const UpdateTodo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setID] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('Id'));
        setTitle(localStorage.getItem('Title'));
        setDescription(localStorage.getItem('Description'));
    })

    const updateData = () => {
        axios.put(`http://localhost:8080/todo/${id}`, {
            title,
            description
        })

    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
                </Form.Field>
                <Button type='submit' onClick = {updateData}>Update</Button>
            </Form>
        </div>
    )
}