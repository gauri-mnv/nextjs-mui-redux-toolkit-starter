"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";
import TopMenu from "../components/TopMenu";
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

export default function Page() {
    const userData = useSelector((data) => data.usersData.users);
    const dispatch = useDispatch();
    console.log(userData);
    return (
      <Container maxWidth="sm" sx={{ mt: 6 }}>
                 <TopMenu />
                 <hr/>

            <h1>Remove User Page</h1>
            {
                <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>BUTTON</th>
                  </tr>
                </thead>
                <tbody>{
                     userData.map((item) => (
                        <tr key={item.id} >
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.mail}</td>
                        <td><Button onClick={() => dispatch(removeUser(item.id))}>Remove User</Button></td>
                      </tr>
                  
                        ))}
                  
                </tbody>
              </table>
                
            }
        </Container >
    )
}