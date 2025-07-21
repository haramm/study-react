import React from 'react';

class Todo {
    constructor(id, contents, checked, isDone) {
        this.id = id;
        this.contents = contents;
        this.checked = checked;
        this.isDone = isDone;
    }
}
//외부에서 쓰려면 꼭 써야함
export default Todo;