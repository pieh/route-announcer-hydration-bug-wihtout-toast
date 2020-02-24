import React from "react"

export default ({ element }) => {
  return (
    <React.Fragment>
      {element}
      <div style={{ color: "red" }}>Hello</div>
    </React.Fragment>
  )
}
