import React, { useState, useEffect } from "react"
import "../styles/index.css"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`/api/logo`).then(res => res.json())

      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div className="row">
      {data.length > 0
        ? data.map(logo => (
            <div className="column" key={logo}>
              <img src={logo} alt={logo} width="50%" height="50%"/>
            </div>
          ))
        : ""}
    </div>
  )
}

export default App
