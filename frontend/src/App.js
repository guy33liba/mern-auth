import React, { useState } from "react"

const App = () => {
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [container, setContainer] = useState([])

  const addUser = () => {
    setContainer((prev) => [...prev, name, email, password])
  }
  console.log(container)
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
      <label>name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setname(e.target.value)}
        placeholder="name"
      />
      <label>email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <label>password</label>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={addUser}>add user</button>

      <div>
        {container.map((user, i) => {
          return (
            <div key={i}>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.password}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
