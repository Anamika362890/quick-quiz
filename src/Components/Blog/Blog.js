import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='blog-main'>Welcome To Our Blog Page</h1>
            <div className='blog'>
                <div className='single-blog'>


                    <h3>What is the purpose of react router?</h3>
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route as it changes, and it also gives you tools to update the location using Link tag  and the history API.</p>
                </div>
                <div className='single-blog'>
                    <h3>How does Context Api work?</h3>
                    <p>Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page</p>
                </div>
                <div className='single-blog'>
                    <h3>Write About useRef</h3>
                    <p>he useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called .useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.Is useRef synchronous?
                        useRef is a synchronous hook that updates the state immediately and persists its value through the component's lifecycle, but it doesn't trigger a re-render.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;