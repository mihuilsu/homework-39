import React from 'react';
import '../styles/ClassComponent.css';

/**
 * Class Component
 * Traditional class component approach
 * Demonstrates use of this.state and lifecycle methods
 * 
 * Note: In modern projects, it's recommended to use
 * functional components with hooks instead of class components
 */
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      doubled: 0,
      timestamp: new Date().toLocaleTimeString()
    };
  }

  // Lifecycle method - called after component is mounted
  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({
        timestamp: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  // Lifecycle method - called before component is unmounted
  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  // Increment counter and update doubled value
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
      doubled: (prevState.count + 1) * 2
    }));
  };

  // Decrement counter (minimum 0)
  decrementCount = () => {
    this.setState(prevState => ({
      count: Math.max(0, prevState.count - 1),
      doubled: Math.max(0, (prevState.count - 1) * 2)
    }));
  };

  // Reset counter to zero
  resetCount = () => {
    this.setState({
      count: 0,
      doubled: 0
    });
  };

  render() {
    const { count, doubled, timestamp } = this.state;

    return (
      <div className="class-container">
        <div className="class-header">
          <h2>🏛️ Class Component</h2>
          <p>Class component with lifecycle methods</p>
        </div>

        <div className="class-content">
          {/* Counter display */}
          <div className="counter-display">
            <div className="counter-value">{count}</div>
            <div className="counter-label">Counter</div>
          </div>

          {/* Additional information */}
          <div className="counter-info">
            <div className="info-row">
              <span className="label">Doubled:</span>
              <span className="value">{doubled}</span>
            </div>
            <div className="info-row">
              <span className="label">Time:</span>
              <span className="value">{timestamp}</span>
            </div>
          </div>

          {/* Control buttons */}
          <div className="button-group">
            <button 
              onClick={this.decrementCount}
              className="btn btn-decrement"
            >
              − Decrease
            </button>
            <button 
              onClick={this.resetCount}
              className="btn btn-reset"
            >
              ↺ Reset
            </button>
            <button 
              onClick={this.incrementCount}
              className="btn btn-increment"
            >
              + Increase
            </button>
          </div>

          {/* Information about lifecycle methods */}
          <div className="class-info">
            <h3>⚙️ Lifecycle methods used:</h3>
            <ul>
              <li><strong>constructor()</strong> - state initialization</li>
              <li><strong>componentDidMount()</strong> - start timer</li>
              <li><strong>componentWillUnmount()</strong> - cleanup timer</li>
              <li><strong>render()</strong> - display component</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}