import { useState } from 'react';
import '../styles/StatefulComponent.css';

/**
 * Stateful Component
 * A component that manages its own state
 * Uses useState hook to add and manage tasks
 */
export default function StatefulComponent() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  // Add a new task to the list
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, done: !t.done } : t
    ));
  };

  // Delete a task from the list
  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  // Count completed tasks
  const completedCount = tasks.filter(t => t.done).length;

  return (
    <div className="stateful-container">
      <div className="stateful-header">
        <h2>📝 Stateful Component</h2>
        <p>Component that manages state using useState hook</p>
      </div>

      <div className="stateful-content">
        <div className="input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
            placeholder="Enter new task..."
            className="task-input"
          />
          <button onClick={addTask} className="btn-add">
            Add
          </button>
        </div>

        <div className="tasks-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks yet. Add your first one! 🎯</p>
          ) : (
            tasks.map(task => (
              <div key={task.id} className={`task-item ${task.done ? 'completed' : ''}`}>
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTask(task.id)}
                  className="task-checkbox"
                />
                <span className="task-text">{task.text}</span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn-delete"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <span className="stat-value">{tasks.length}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
          <div className="stat-box completed">
            <span className="stat-value">{completedCount}</span>
            <span className="stat-label">Completed</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">{tasks.length - completedCount}</span>
            <span className="stat-label">Remaining</span>
          </div>
        </div>
      </div>
    </div>
  );
}