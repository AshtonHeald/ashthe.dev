---
title: "Fundamentals of React"
description: "A resource for learning or referencing the React 'library'"
pubDate: "May 20 2025"
tags:
    - "react"
    - "fundamentals"
---

React is one of the most widely used JavaScript libraries for building user interfaces, especially for web applications. In this series, we’ll cover the core concepts that form the foundation of React development. In Part One, we’ll start with the basics.

---

### What is React?

React is an open-source JavaScript library developed by Facebook for building fast, interactive user interfaces. It allows developers to create reusable UI components and manage the state of an application efficiently.

### Why use react over vanilla JS

Vanilla JavaScript can be used to build user interfaces, but managing complex UIs with dynamic state, user interactions, and DOM updates becomes difficult and error-prone. React provides a structured way to build and update UIs using components and a virtual DOM, which improves performance and maintainability. It also encourages cleaner code, better separation of concerns, and easier debugging.

### Why use react over another library/framework?

React offers a balance of flexibility and structure. Unlike full frameworks like Angular or Vue, React is focused on the UI and doesn’t impose strict architectural patterns, giving developers more control over the stack. It has a large ecosystem, strong community support, and is widely adopted in the industry. React’s declarative component model and use of hooks make it intuitive and scalable for both small and large applications.

---

### What are Components in React?

Components are the building blocks of a React application. Each component represents a piece of the UI and can be reused throughout the application. Think of components as custom HTML elements that encapsulate their own structure, styling, and behavior.

### Functional Components

Functional components are JavaScript functions that return JSX. They are the most common way to write components in modern React. They are simple, lightweight, and easy to test.

```jsx
// Welcome.jsx
function Welcome() {
    return <h1>Hello, world!</h1>;
}
```

### Component Basics

- **JSX:** JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. React uses JSX to describe what the UI should look like.

```jsx
const element = <h1>Welcome to React</h1>;
```

- **Props:** Props (short for properties) are used to pass data from a parent component to a child component. Props are read-only and help make components dynamic.

```jsx
// Welecome.jsx (Basic)
const Welcome = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};

// Welcome.jsx (Destructuring)
const Welcome = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};
```

```jsx
// App.jsx
const App = () => {
    return <Welcome name="Ash" />;
};
```

- **State:** State is a built-in object used to store data that can change over time. Unlike props, which are passed from a parent, state is managed within the component itself. When state changes, React automatically re-renders the component to reflect the new data.
  In modern React, state is handled using the `useState` hook.
  (More on that in part 3.)

- **Conditional Rendering:** React lets you render elements or components based on conditions. This allows the UI to change dynamically depending on application state or props.

```jsx
// Using if statement
const Message = ({ isMorning }) => {
    if (isMorning) {
        return <p>Good morning!</p>;
    }

    return <p>Good evening!</p>;
};

//Using ternary operator
const Message = ({ isMorning }) => {
    return <p>{isMorning ? "Good morning!" : "Good evening!"}</p>;
};
```

**Composition:** Composition is the practice of building complex UIs by combining simpler, reusable components. Instead of creating one large component, you break it down into smaller parts that each handle a specific piece of the UI. This leads to cleaner, more maintainable code.

```jsx
// Header.jsx
const Header = () => {
    return <h1>My App</h1>;
};

// Content.jsx
const Content = () => {
    return <p>This is the main content.</p>;
};

// Footer.jsx
const Footer = () => {
    return <small>&copy; 2025</small>;
};

// App.jsx
const App = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};
```
