"use client"
import React from 'react';
import { store } from "./store";
import { ThemeProvider, CssBaseline } from '@mui/material';
const { Provider } = require("react-redux");
import theme from '../theme';

export function Providers({ children }) {
    return (  
    <ThemeProvider theme={theme}>
    
    <CssBaseline />
    <Provider store={store}>
        {children}
    </Provider>
    
    </ThemeProvider>)
}