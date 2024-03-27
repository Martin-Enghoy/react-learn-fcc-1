import { useState } from "react"

function App() {
  
  return (
    // Fragment
    <>
      <h1>Hello World!</h1>
      <h2>Hatdog</h2>
      <UserComponent/>
      <ProfileComponent/>
      <FeedComponent/>
      <ParentComponent/>
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

function ParentComponent() {
		const [name, setName] = useState('John')
	
		return <ChildComponent name={name} setName={setName}/>
	}

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={() => props.setName('Mark')}>
        Change Name
      </button>
    </>
  )
}

export default App
