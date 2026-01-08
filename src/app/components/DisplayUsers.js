"use client"
import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";
import {
    Container,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Stack,
    Link as MuiLink,
  } from "@mui/material";

export default function DisplayUsers(){
    const userData= useSelector((data)=>data.usersData.users);
    const dispatch=useDispatch();

    console.log(userData);

    return(
    <Container maxWidth="sm" sx={{ mt: 6 }} >
        <h3>User List</h3>
        {
            userData.map((user)=>(
                <Card key={user.id} className="user-item" style={{ margin: '10px', display:'flex',
                flexDirection:'row',
                gap:'20px',
                alignItems:'center',
                width:'auto'
                }}>
                    {/* <span>{user.id}</span> */}
                    <span className="user-item-name" style={{ padding: '2px' }}>{user.mail}</span>
                    <br/>
                    <span className="user-item-mail" style={{ padding: '2px' }}>{user.name}</span>
                    <br/>
                    <Button onClick={()=>{
                         try {
                            dispatch(removeUser(user.id))     
                        } catch (error) {
                                console.error(error);
                            }
                        }}  className="user-item-remove">Remove</Button>
                   
                       
                </Card>
            ))
        }
    </Container>
    )
}