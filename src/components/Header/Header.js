import React, {useEffect} from 'react'
import styles from './Header.module.scss'
import {useForm} from "react-hook-form";
import {Box, Button, Container, MenuItem, Select, TextField, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "../../redux/actionCreators";

export const Header = () => {

    const dispatch = useDispatch()
    const {startIndex, filter} = useSelector(state => state.bookReducer)

    const onSubmit = (formData) => {
        const filter = {
            term: formData.term,
            orderBy: formData.orderBy
        }
        dispatch(fetchBooks(filter, startIndex))
    }

    const {
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur'
    })

    return (
        <header className={styles.header}>
            <Container maxWidth='lg'>
                <Typography variant='h3' sx={{textAlign: 'center'}}>Search for book</Typography>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                        <TextField
                            {...register('term', {})}
                            placeholder='Search'
                            type='search'
                            variant='standard'
                            label='Search'
                            fullWidth
                        />
                        <Select defaultValue={'relevance'}
                                placeholder='Order by'
                                label='Order by'
                                {...register('orderBy', {})}
                                variant={'standard'}
                        >
                            <MenuItem value={'relevance'}>relevance</MenuItem>
                            <MenuItem value={'newest'}>newest</MenuItem>
                        </Select>
                    <Button size='small' type='submit' variant='outlined'>
                        Search
                    </Button>
                </form>
            </Container>
        </header>
    )
}