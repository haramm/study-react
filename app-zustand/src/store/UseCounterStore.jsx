import React from 'react';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import {persist} from 'zustand/middleware';

const UseCounterStore = create(
    persist(
        immer((set) => ({
            count : 0,
            addNumber : () => set((state) =>{state.count += 1}),
            minusNumber : () => set( (state) => {state.count -= 1})
        }))
    ),
    {
        name : 'count-storage'
    }
);
export default UseCounterStore;