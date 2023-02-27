import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({
  todosProps, setTodos, handleChange, deleTodo,
}) {
  return (
    <div>
      <ul>
        {todosProps.map((todo) => (
          <TodoItem
            key={todo.id}
            itemProp={todo}
            setTodos={setTodos}
            handleChange={handleChange}
            deleTodo={deleTodo}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleTodo: PropTypes.func.isRequired,
};

export default TodoList;
