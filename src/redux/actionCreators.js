import {bookSlice} from "./bookSlice";
import axios from "axios";


export const fetchBooks = (filter, startIndex) => async (dispatch) => {
    try {
        dispatch(bookSlice.actions.booksFetching())
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.term}&key=AIzaSyA17HrqHYs6xPlyoLHzEeJtXPZbKdRyRFU&startIndex=${startIndex}&orderBy=${filter.orderBy}&maxResults=32`)
        console.log(response.data)
        dispatch(bookSlice.actions.setFilter(filter))
        dispatch(bookSlice.actions.setTotalBooksCount(response.data.totalItems))
        dispatch(bookSlice.actions.booksFetchingSuccess(response.data.items))
    } catch (e) {
        dispatch(bookSlice.actions.booksFetchingError(e.message))
    }
}

export const loadMore = (filter, startIndex) => async (dispatch) => {
    try {
        dispatch(bookSlice.actions.loadMore())
        dispatch(bookSlice.actions.booksFetching())
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.term}&key=AIzaSyA17HrqHYs6xPlyoLHzEeJtXPZbKdRyRFU&startIndex=${startIndex}&orderBy=${filter.orderBy}&maxResults=32`)
        dispatch(bookSlice.actions.setFilter(filter))
        dispatch(bookSlice.actions.booksFetchingSuccess(response.data.items))
    } catch (e) {
        dispatch(bookSlice.actions.booksFetchingError(e.message))
        }
}

export const fetchBook = (id) => async (dispatch) => {
    try {
        dispatch(bookSlice.actions.booksFetching())
        const response = await axios.get(`https://books.google.com/books?id=${id}`)
        console.log(response.data)
    } catch (e) {
        dispatch(bookSlice.actions.booksFetchingError(e.message))
    }
}