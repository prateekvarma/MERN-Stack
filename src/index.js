import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <h2>React Rendered from a component</h2>
        );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);