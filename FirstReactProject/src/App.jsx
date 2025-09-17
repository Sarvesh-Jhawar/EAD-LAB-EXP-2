import './App.css'

/**
 * A component to display user details.
 * It receives `username` and `details` as props.
 * Using object destructuring in the function signature is a common pattern.
 */
function UserDetails({ username, details }) {
  return (
    <div className="user-card">
      <h2>{username}</h2>
      <p>{details}</p>
    </div>
  );
}

function App() {
  // An array of user objects to display
  const users = [
    { id: 1, name: 'Sarvesh', info: 'A passionate developer learning React.' },
    { id: 2, name: 'Jane Doe', info: 'A front-end expert and UI designer.' },
    { id: 3, name: 'John Smith', info: 'Loves hiking and photography.' }
  ];
  return (
    <div className="app-container">
      <h1>User Profiles</h1>
      <div className="user-list">
        {/* We map over the users array to render a UserDetails component for each user */}
        {users.map(user => (
          <UserDetails key={user.id} username={user.name} details={user.info} />
        ))}
      </div>
    </div>
  )
}

export default App
