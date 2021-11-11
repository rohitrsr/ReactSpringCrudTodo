import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export const AddToDo = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const saveTodo = () => {
        axios.post(`http://localhost:8082/todoApp/todos`, {
            name,
            description
        })
        console.log(name);
        console.log(description);
    }

    return (
        <Form className="create-form">
            <Form.Field>
                <label>Todo Name</label>
                <input placeholder='Todo Name' onChange={e => setName(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='Description' onChange={e => setDescription(e.target.value)} />
            </Form.Field>
            <Button type='submit' onClick={saveTodo}>Submit</Button>
        </Form>
    );
}
