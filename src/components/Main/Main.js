import React from 'react'
import {Books} from "./Books/Books";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "@mui/material";
import styles from './Main.module.scss'
import {loadMore} from "../../redux/actionCreators";


export const Main = () => {

    const {totalBooksCount} = useSelector(state => state.bookReducer)
    const dispatch = useDispatch()

    return (
        <>
            <Books/>
            {totalBooksCount !== 0 ?
                <div className={styles.btnWrapper}>
                    <Button onClick={dispatch(loadMore)} className={styles.btn} size='large' variant='contained'>
                        Load more
                    </Button>
                </div>
                : null
            }
        </>
    )
}