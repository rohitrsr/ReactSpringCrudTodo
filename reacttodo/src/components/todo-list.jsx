import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react';

export const TodoList = () => {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8082/todoapp/todos`).then((response) => {
            setAPIData(response.data);
        })
    }, [])

    const setData = (data) => {
        console.log(data);
        let { id, title, description } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Description', description);
    }

    const onDelete = (id) => {
        console.log(id);
        axios.delete(`http://localhost:8082/todoapp/todos/${id}`)
            .then(() => {
                getData();
            })
    }

    const getData = () => {
        axios.get(`http://localhost:8082/todoapp/todos`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Link to='/updateTodo'>
                                    <Table.Cell>
                                        <Button onClick = {() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button onClick = {() => onDelete(data.id)}>Delete</Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}