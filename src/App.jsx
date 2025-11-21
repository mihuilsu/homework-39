import StatefulComponent from './components/StatefulComponent';
import StatelessComponent from './components/StatelessComponent';
import ClassComponent from './components/ClassComponent';
import './App.css';

/**
 * App Component
 * Main application component
 * Contains all three types of components for demonstration
 */
export default function App() {
  // Props for the Stateless Component
  const statelessProps = {
    title: '⚛️ Stateless Component',
    icon: '📦',
    description: 'Component without internal state. Receives data through props and only displays it. This is a "pure" component that does not affect other parts of the application.',
    features: [
      { icon: '✅', name: 'Simple', value: '100% Props' },
      { icon: '🎯', name: 'Pure', value: 'No State' },
      { icon: '♻️', name: 'Reusable', value: 'Reusable' }
    ]
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1>⚛️ React Components Demo</h1>
          <p>Demonstration of component types: Stateful, Stateless, and Class</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        {/* First section with Stateful and Stateless components */}
        <section className="section">
          <div className="grid-2">
            <StatefulComponent />
            <StatelessComponent {...statelessProps} />
          </div>
        </section>

        {/* Second section with Class component */}
        <section className="section">
          <ClassComponent />
        </section>

        {/* Comparison section */}
        <section className="section comparison-section">
          <h2>📊 Comparison of Approaches</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Functional (Hooks)</th>
                  <th>Class Components</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Development convenience</strong></td>
                  <td className="positive">✅ Simple and modern</td>
                  <td className="negative">❌ More code</td>
                </tr>
                <tr>
                  <td><strong>Code readability</strong></td>
                  <td className="positive">✅ Very readable</td>
                  <td className="negative">⚠️ More complex</td>
                </tr>
                <tr>
                  <td><strong>State management</strong></td>
                  <td className="positive">✅ useState hook</td>
                  <td>this.state</td>
                </tr>
                <tr>
                  <td><strong>Lifecycle</strong></td>
                  <td className="positive">✅ useEffect</td>
                  <td>componentDidMount</td>
                </tr>
                <tr>
                  <td><strong>Bundle size</strong></td>
                  <td className="positive">✅ Smaller</td>
                  <td className="negative">⚠️ Larger</td>
                </tr>
                <tr>
                  <td><strong>Recommendation</strong></td>
                  <td className="positive">✅ Use this</td>
                  <td className="negative">⚠️ Legacy</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Information section */}
        <section className="section info-section">
          <div className="info-cards">
            <div className="info-card">
              <h3>📝 Stateful Component</h3>
              <p>Component that manages its own state using useState hook. Used for logic and data management.</p>
            </div>
            <div className="info-card">
              <h3>📦 Stateless Component</h3>
              <p>Component without state. Receives data through props and only displays it. This is a pure component.</p>
            </div>
            <div className="info-card">
              <h3>🏛️ Class Component</h3>
              <p>Traditional approach to components. Has lifecycle methods. Rarely used in modern projects.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <p>Created with ❤️ for learning React | Vite + React 18</p>
        <p className="github-link">📌 GitHub: <a href="https://github.com/mihuilsu/homework-39" target="_blank" rel="noopener noreferrer">Components App</a></p>
      </footer>
    </div>
  );
}