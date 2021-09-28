import { createStore } from './core.js';
import reducer from './reducer.js';

const { attach, connect, dispatch } = createStore(reducer);

// Đặt dispatch là biến global
window.dispatch = dispatch;

export {
    attach,
    connect
};