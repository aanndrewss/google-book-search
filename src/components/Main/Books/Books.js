import React from 'react'
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import styles from './Books.module.scss'
import {Link, useSearchParams} from "react-router-dom";


export const Books = () => {
    const {books, totalBooksCount, error} = useSelector(state => state.bookReducer)

    return (
        <div>
            {totalBooksCount === 0 ?
                <Typography sx={{textAlign: 'center', margin: 2}}>
                    Results not found!
                </Typography> :
                <Typography sx={{textAlign: 'center', margin: 2}}>
                    Results {totalBooksCount} find
                </Typography>}
            <Grid container spacing={3} direction='row'>
                {books.map((book) => {
                    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail
                    let authors = book.volumeInfo.authors && book.volumeInfo.authors[0]
                    return (
                        <Grid item xs={3}>
                            <Link to={'/book/' + book.id} style={{textDecoration: 'none'}}>
                                <Card>
                                    <div className={styles.imageWrapper}>
                                        {thumbnail ?
                                            <img className={styles.image} alt={book.title}
                                                 src={thumbnail}/> :
                                            <img className={styles.image} alt={book.title}
                                                 src={''}/>
                                        }
                                    </div>
                                    <div className={styles.titleWrapper}>
                                        <Typography>
                                            {book.volumeInfo.title}
                                        </Typography>
                                    </div>
                                    <div className={styles.authorWrapper}>
                                        {authors &&
                                            <Typography color='text.secondary' sx={{textDecoration: 'none'}}>
                                                {authors}
                                            </Typography>
                                        }
                                    </div>
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}