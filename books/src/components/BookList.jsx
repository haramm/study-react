import React from 'react';
import '../assets/css/bookList.css';
import { useState } from 'react';
import { BorrowBook } from '../data';

function BookList({bookList, logUser, addNewBook, deleteBooks, rentalBookEvt}) {

    const [checkedList, setCheckedList] = useState([]);
    const [bookName, setBookName] = useState('');
    
    const checkBooks = (e) => {
        const {value, checked} = e.target;

        if(checked) {
            setCheckedList((prev) => [...prev, Number(value)]);
        }
        else {
            setCheckedList((prev) => prev.filter(bookId => bookId !== Number(value)));
        }
    }

    const eventHandler = (type) => {
        if(type === 'add') {
            addNewBook(bookName);
        }
        else if(type === 'del') {
            deleteBooks(checkedList);
            setCheckedList([]);
        }
        else if(type === 'rental') {
            if(checkedList.length === 0) {
                alert('대여할 책을 선택해주세요');
                return false;
            }
            rentalBookEvt(checkedList);
            setCheckedList([]);
        }
    }
    

    const enterEvent = (e) => {
        if(e.key === 'Enter') {
            eventHandler('add');
        }
    }

    return (
        <div className='book-list'>
            <div>
                <h3>도서 리스트</h3>
            </div>
            <section className='mb-3'>
                <label htmlFor='bookName'>책 이름 : </label>
                <div className='row'>
                    <div className='col-8'>
                        <input type='text'
                                id='bookName'
                                name='bookName'
                                className='form-control'
                                onChange={(e) => setBookName(e.target.value)}
                                ></input>
                    </div>
                    <div className='col-3 text-end'>
                        <button type='button' 
                                className='btn btn-primary me-2'
                                onClick={() => eventHandler('add')}
                                onKeyDown={(e) => enterEvent(e)}>추가</button>
                        <button type='button'
                                className='btn btn-success me-2'
                                onClick={() => eventHandler('rental')}
                                disabled = {logUser === ''}>대여</button>
                        <button type='button'
                                className='btn btn-danger'
                                onClick={() => eventHandler('del')}>삭제</button>
                    </div>
                    
                </div>
            </section>
            <section className='item-list'>
                {
                    bookList?.map(book => (
                        <div className='mx-2' key={book.id}>
                            <input type='checkbox'
                                    checked={checkedList.includes(book.id) || book.isAbsent}
                                    disabled={book.isAbsent}
                                    onChange={checkBooks}
                                    value={book.id}/>
                            <span className='ms-1'>{book.name}</span>
                            {book.isAbsent && <span>(대여중)</span>}
                        </div>
                    ))
                }
            </section>
        </div>
    );
}

export default BookList;