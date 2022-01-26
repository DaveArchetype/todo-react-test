# Explanation to what I have here

I am refactoring a Todo List Web App and writing tests for this technical test.

I begin by analysing the code already written and structuring how the project would look like.

So far, I believe I will have 3 components, 1 being Todos, 1 being Todo, 1 being AddTodo.
All will be added in a components folder in /src.

The first component(Todos) will be returning the table with Todos and the AddTodo component which will be then used in App.js.
This will also contain the main state in which I keep the Todos list and addTodoValue.

The second component(Todo) shall contain a Todo`s values in a table-value structure.
It will also have the checkbox for checking the Todo as done or not done.
I have run the app initially to see how it will look like and behave and I realised I forgot to mention about the Delete button which will be found in the Todo.
This Delete button is connected to the delete function in Todos.

The third and final component(AddTodo) will contain the input text in which the user would input text for a new todo.
It will also contain the button which on click will send the text up to the Todos component in which it will change the state to reflect a new Todo addition.

Testing shall be also finished for all components, checking if they correctly render and the correct usage of the inputs in AddTodo.
All will be added in a components folder in /src.
