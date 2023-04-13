import React, { Component, useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { IconButton, InputAdornment, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function TodoTable() {
    const context = useContext(ToDoContext);
    const [addTodo, setAddTodo] = useState('');
    const [editIsShown, setEditIsShown] = useState(false);
    const [editTodo, setEditTodo] = useState('');
    return (
        <form onSubmit={(e) => {context.createTodo(e,{task:addTodo})}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                        <TableCell align='right'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableRow>
                    <TableCell>
                        <TextField label="New Task" fullWidth value={addTodo} onChange={(e) => (setAddTodo(e.target.value))} />
                    </TableCell>
                    <TableCell align='right'>
                        <IconButton type="submit"><AddIcon /></IconButton>
                    </TableCell>
                </TableRow>
                <TableBody>
                    {context.todos.slice().reverse().map((todo, index) => (
                        <TableRow key={'todo' + index}>
                            <TableCell>
                                {

                                editIsShown === todo.id? 
                                <TextField fullwidth value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                                InputProps={{endAdornment:
                                    <>
                                    <IconButton onClick={() => {setEditIsShown(false)}}><CloseIcon /></IconButton>
                                    <IconButton onClick={() => {context.updateTodo({id: todo.id, task: editTodo}); setEditIsShown(false);}}><DoneIcon /></IconButton>
                                    </>
                                    }}
                                >
                                </TextField>
                                :
                                todo.task
                            
                            }
                                
                                
                                </TableCell>
                            <TableCell align='right'>
                                <IconButton onClick={() => {setEditIsShown(todo.id); setEditTodo(todo.task)}}><EditIcon /></IconButton>
                                <IconButton><DeleteIcon /></IconButton>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </form>
    );
}
