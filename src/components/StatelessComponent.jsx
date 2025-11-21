import '../styles/StatelessComponent.css';

/**
 * Stateless Component
 * A component without internal state
 * Receives all data through props and only displays it
 * This is a "pure" component (pure component)
 */
export default function StatelessComponent({ title, description, icon, features }) {
  return (
    <div className="stateless-container">
      <div className="stateless-header">
        <span className="icon">{icon}</span>
        <h2>{title}</h2>
      </div>

      <p className="stateless-description">{description}</p>

      {/* Display features in a grid */}
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.name}</h3>
            <p>{feature.value}</p>
          </div>
        ))}
      </div>

      {/* Information box with tip */}
      <div className="stateless-info">
        <p className="info-text">
          💡 <strong>Tip:</strong> This component is completely dependent on props. 
          It has no internal state and always displays the same thing 
          when receiving the same props.
        </p>
      </div>
    </div>
  );
}