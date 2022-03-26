import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='questions'>
            <div className='question-1'>
            <h3>Question-1:-How React Works?</h3>
            <p>Answer:- React works with its virtual DOM, making changes that need to be made to the DOM and then doing it with a single process. React works from top to bottom. It's a declarativeJavaScript library for building web apps. It's basically maintaining a tree for us. It makes fake HTML code with virtual DOM and implements it more efficiently.</p>
            </div>
            <div className='question-2'>
            <h3>Question-2:-Props VS State in React.</h3>
            <p>Answer:- The state is the local component it cannot be modified outside of the component. It's similar to local variables in a function. Props are reusable and they can use as many as you want. it gives components the ability to receive data from the parent components. We can receive data vai props but we can't receive data with the state.</p>
            </div>
            <div className='question-3'>
            <h3>Question-3:-How useState Works?</h3>
            <p>Answer:- useState function is just a regular function. useState is a Hook that is most used in React. useState can pass data and returns something we need. useState feature which allows you to hook functionality into functional components. The useState() hook sets up individual state property.</p>
            </div>
            
        </div>
    );
};

export default Questions;