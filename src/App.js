import React from 'react'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {useSelector} from "react-redux";
import Preloader from "./components/common/Preloader";
import {Container} from "@mui/material";
import {Route, Routes} from 'react-router-dom';
import {Book} from "./components/Main/Books/Book/Book";

export const App = () => {
    const {isLoading, error} = useSelector(state => state.bookReducer)
    return (
        <div>
            <Header/>
            <Container maxWidth='lg'>
                {isLoading ?
                    <Preloader/> :
                    <Routes>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/book' element={<Book/>}>
                            <Route path=':bookId' element={<Book/>}/>
                        </Route>
                    </Routes>
                }
                {error && <h1>{error}</h1>}
            </Container>
        </div>
    )
}
