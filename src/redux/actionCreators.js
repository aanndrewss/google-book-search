import {bookSlice} from "./bookSlice";
import axios from "axios";


export const fetchBooks = (filter, startIndex) => async (dispatch) => {
    try {
        dispatch(bookSlice.actions.booksFetching())
        dispatch(bookSlice.actions.setFilter(filter))
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${filter.term}&key=AIzaSyA17HrqHYs6xPlyoLHzEeJtXPZbKdRyRFU&startIndex=${startIndex}&orderBy=${filter.orderBy}&maxResults=30`)
        console.log(response.data)
        dispatch(bookSlice.actions.setTotalBooksCount(response.data.totalItems))
        dispatch(bookSlice.actions.booksFetchingSuccess(response.data.items))
    } catch (e) {
        dispatch(bookSlice.actions.booksFetchingError(e.message))
    }
}

export const loadMore = () => async (dispatch) => {
    try {
        dispatch(bookSlice.actions.loadMore())
    } catch (e) {
        dispatch(bookSlice.actions.booksFetchingError(e.message))
        }
}