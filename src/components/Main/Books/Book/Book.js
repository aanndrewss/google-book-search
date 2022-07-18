import React, {useEffect} from 'react'
import {Card} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {fetchBook} from "../../../../redux/actionCreators";
import {useDispatch} from "react-redux";

export const Book = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useDispatch()

    /*useEffect(() => {
        const bookId = searchParams.get('id')
        dispatch(fetchBook(bookId))
    })*/


    return (
        <div>
            <Card sx={{marginTop: 3}}>
                <div>
                    <img src={''} alt={''}/>
                </div>
            </Card>
        </div>
    )
}