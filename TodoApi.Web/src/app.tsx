import React from "react";

type TodoItem = {
    id: number;
    name: string;
    dueDate: Date;
    assignee: string;
    isComplete: boolean;
};

type AppClassState = {
    todos: TodoItem[];
};

export class AppClass extends React.PureComponent<{}, AppClassState> {
    componentDidMount = () => {
        this.getItems();
    }

    getItems = () => {
        fetch('http://localhost:5000/api/TodoItems')
            .then(response => response.json())
            .then(console.log)
            .catch(error => console.error('Unable to get items.', error));
    }

    render() {
        return (
            <>
                <h1>To-do CRUD</h1>
                <h3>Add</h3>
                <form>
                    <input type="text" id="add-name" placeholder="New to-do" />
                    <input type="submit" defaultValue="Add" />
                </form>
                <div id="editForm">
                    <h3>Edit</h3>
                    <form action="javascript:void(0);">
                        <input type="hidden" id="edit-id" />
                        <input type="checkbox" id="edit-isComplete" />
                        <input type="text" id="edit-name" />
                        <input type="submit" defaultValue="Save" />
                        <a aria-label="Close">
                        </a>
                    </form>
                </div>
                <p id="counter" />
                <table>
                    <thead>
                        <tr>
                            <th>Is Complete?</th>
                            <th>Name</th>
                            <th />
                            <th />
                        </tr>
                    </thead>
                    <tbody id="todos" />
                </table>
            </>
        );
    }
}
