import React from 'react';
import {create} from 'zustand';


const UseCounterStore = create((set) => ({
    count : 0,
    addNumber : () => set((state) =>({count : state.count + 1})),
    minusNumber : () => set( (state) => ({count : state.count - 1}))
}));
export default UseCounterStore;