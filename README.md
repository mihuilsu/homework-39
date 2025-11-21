# 🚀 React Components Demo

> A modern project demonstrating different types of React components: Stateful, Stateless, and Class components

![React](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📋 Description

This project is an educational example for understanding different approaches to creating React components:

- **Stateful Component** - a component that manages its own state
- **Stateless Component** - a component that only receives data through props
- **Class Component** - the classic approach with lifecycle methods

---

## 🎯 Features

### ✅ Stateful Component (State Management)
- Add and delete tasks
- Mark tasks as completed
- Count completed tasks in real-time
- Using `useState` hook

### ✅ Stateless Component (Receiving Props)
- Display passed data
- Demonstrate the concept of pure components
- Completely dependent on parent component

### ✅ Class Component (Class Approach)
- Demonstrate class component syntax
- Using `this.state`
- Lifecycle methods

---

## 📁 Project Structure

```
homework-39/
├── src/
│   ├── components/
│   │   ├── StatefulComponent.jsx      # Component with state
│   │   ├── StatelessComponent.jsx     # Component without state
│   │   └── ClassComponent.jsx         # Class component
│   ├── styles/
│   │   ├── StatefulComponent.css
│   │   ├── StatelessComponent.css
│   │   └── ClassComponent.css
│   ├── App.jsx                        # Main component
│   ├── main.jsx                       # Entry point
│   └── index.css                      # Global styles
├── public/
├── package.json
├── vite.config.js
├── README.md                          # This file
└── .gitignore
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mihuilsu/homework-39.git
cd homework-39
```

2. **Install dependencies**
```bash
npm install
```

3. **Run dev server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

---

## 📦 Available Commands

### Development
```bash
npm run dev          # Run dev server on localhost:5173
```

### Build
```bash
npm run build        # Build project for production
npm run preview      # Preview production build
```

---

## 📊 Comparison of Approaches

| Criteria | Functional (Hooks) | Class Components |
|----------|------------------|-----------------|
| **Development convenience** | ✅ Simple and modern | ❌ More code |
| **Code readability** | ✅ Very readable | ⚠️ More complex |
| **State management** | `useState` | `this.state` |
| **Lifecycle** | `useEffect` | `componentDidMount` etc. |
| **Performance** | ✅ Optimal | ⚠️ Can be slower |
| **Recommendation** | ✅ **Use this** | ⚠️ Legacy approach |

---

## 💡 Usage Examples

### Stateful Component (StatefulComponent.jsx)
```jsx
import { useState } from 'react';

export default function StatefulComponent() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), text: 'New task' }]);
  };
  
  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      {tasks.map(task => <div key={task.id}>{task.text}</div>)}
    </div>
  );
}
```

### Stateless Component (StatelessComponent.jsx)
```jsx
export default function StatelessComponent({ title, message, onClick }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

### Class Component (ClassComponent.jsx)
```jsx
import React from 'react';

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

---

## 🌐 Live Demo

- **Vercel**: [homework-39](https://homework-39-sepia.vercel.app/)

---

## 🛠 Tech Stack

- **React** 18.2+ - Library for building UI
- **Vite** - Fast build tool
- **CSS** - Component styling

---

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Hooks API Reference](https://react.dev/reference/react/hooks)
- [React Class Components](https://react.dev/reference/react/Component)

---

## 📝 License

This project is licensed under MIT License

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@mihuilsu](https://github.com/mihuilsu)

---

## ❓ FAQ

**Q: Why do we need Stateless components?**
A: They help separate logic (Stateful) and presentation (Stateless), making the code cleaner and reusable.

**Q: When to use Class components?**
A: Rarely in modern projects. They're only used in legacy code. Hooks in Functional components are the modern standard.
