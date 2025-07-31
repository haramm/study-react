import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
import { counterActions } from '../action/CounterActions';

const useCounterStore = create(immer((set, get) => ({
    count : 0,
    ...counterActions(set, get)
})));

export default useCounterStore;