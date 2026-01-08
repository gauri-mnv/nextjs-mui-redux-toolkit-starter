"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../redux/slice"
import { useEffect } from "react";
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

export default function Page(){
    const dispatch=useDispatch();
    const apiUserData= useSelector((data)=>data.usersData.userAPIData);
    
    useEffect(()=>{
        dispatch(fetchApiUsers())
    },[dispatch])
    return(
        <Container maxWidth="sm" sx={{ mt: 6 }}>
            <h1>Users Data from API</h1>
           
            {
               apiUserData?.length>0 &&(
                <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>WEBSITE</th>
                  </tr>
                </thead>
              
                <tbody>{
                    apiUserData.map((item)=>(
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.website}</td>
                      </tr>
                  
                        ))}
                  
                </tbody>
              </table>
               ) 
            }
        </Container>
    )
}