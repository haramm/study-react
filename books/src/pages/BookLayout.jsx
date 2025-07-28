import React from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import { Book, BorrowBook } from '../data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/bookLayout.css';
import Login from '../components/Login';
import { useCallback } from 'react';
import MyBook from '../components/MyBook';
import BookList from '../components/BookList';




function BookLayout(props) {

    const bookReducer = (state, action) => {
        switch(action.type) {
            case 'newBook':
                return [...state, action.payload];
            case 'deleteBook':
                return state.filter(book => !action.payload.includes(book.id));
            case 'rental':
                return action.payload;
            default:
                return state;
        }
    }

    const bookId = useRef(1);
    const [users, setUsers] = useState([]);
    const [selected, setSelected] = useState('');
    const [logUser, setLogUser] = useState('');
    const [rentalBooks, setRentalBooks] = useState([]);
    const [bookList, bookDispatch] = useReducer(bookReducer, 
        [
            new Book(bookId.current++, '연금술사', false),
            new Book(bookId.current++, '자바의정석4판', false),
            new Book(bookId.current++, '아무도 모르는 CS 지식', false),
            new Book(bookId.current++, '스무디한잔 마시며 끝내는 리액트', false),
            new Book(bookId.current++, '30일만에 배우는 자바', false)
        ]
    );

    //selectbox 처리용
    useEffect(() => {
        const users = ['신동열', '김철수'];
        setUsers(users);
        setSelected(users[0]);
    },[]);

    const loginUser = useCallback(() => {
        const user = users.find(name => name === selected);
        setLogUser(user);
    },[users, selected]);

    const addNewBook = (bookName) => {
        if(bookList.find(book => book.name === bookName)) {
            alert('해당 책은 이미 가지고 있습니다');
            return false;
        }
        bookDispatch({type : 'newBook', payload : new Book(bookId.current++, bookName, false)});
    }

    const deleteBooks = (checkedList) => {
        bookDispatch({type : 'deleteBook', payload : checkedList});
    }

    const rentalBookEvt = useCallback((checkedList) => {
        const borrowBooks = bookList.filter(book => checkedList.includes(book.id))
            .map(book => new BorrowBook(book.id, book.name, logUser, false));
        setRentalBooks((prev) => [...prev, ...borrowBooks]);
    },[bookList, logUser]);

    const returnBookEvt = useCallback((returnCheckList) => {
        const remindBooks = rentalBooks.filter(book => !returnCheckList.includes(book.bookId));
        setRentalBooks(remindBooks);
    },[rentalBooks]);

    useEffect(() => {
        const rentalBookIds = rentalBooks.map(rentalBook => rentalBook.bookId);
        const updatedBookList = bookList.map(book => (
            rentalBookIds.includes(book.id) 
            ? {...book, isAbsent : true} 
            : {...book, isAbsent : false}
        ))
        bookDispatch({type:'rental', payload:updatedBookList});
    },[rentalBooks]);

    return (
        <div className='container'>
            <main className='contents'>
                <section className='text-center mb-4'>
                    <h2>도서 관리 프로그램</h2>
                </section>
                <section>
                    <Login users={users} 
                            logUser={logUser} 
                            selected={selected}
                            setSelected={setSelected}
                            loginUser={loginUser}/>
                            <MyBook rentalBookList={rentalBooks} 
                                    logUser={logUser} 
                                    rentalBookEvt={rentalBookEvt}
                                    returnBookEvt={returnBookEvt}/>
                            <BookList bookList={bookList} 
                                    logUser={logUser} 
                                    addNewBook={addNewBook}
                                    deleteBooks={deleteBooks}
                                    rentalBookEvt={rentalBookEvt}/>
                </section>
            </main>
        </div>
    );
}

export default BookLayout;