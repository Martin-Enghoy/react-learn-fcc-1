function App() {
  
  return (
    // Fragment
    <>
      <h1>Hello World!</h1>
      <h2>Hatdog</h2>
      <UserComponent/>
      <ProfileComponent/>
      <FeedComponent/>
    </>
  )
}

function UserComponent(){
  return <h1>User Component</h1>
}
function ProfileComponent(){
  return <h1>Profile Component</h1>
}
function FeedComponent(){
  return <h1>Feed Component</h1>
}

export default App
