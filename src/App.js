import React from 'react'
import FlexDirection from './components/FlexDirection'

function App() {

  const wrapRow = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    mainAxis: "Horizontally: left to right &rarr;",
    crossAxis: "Vertically: top to bottom &darr;"
  }

  const wrapRowRev = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    mainAxis: "Horizontally: right to left &larr;",
    crossAxis: "Vertically: top to bottom &darr;"
  }

  const wrapRevRow = {
    display: "flex",
    flexWrap: "wrap-reverse",
    flexDirection: "row",
    mainAxis: "Horizontally: left to right &rarr;",
    crossAxis: "Vertically: bottom to top &uarr;"
  }

  const wrapRevRowRev = {
    display: "flex",
    flexWrap: "wrap-reverse",
    flexDirection: "row-reverse",
    mainAxis: "Horizontally right to left &larr;",
    crossAxis: "Vertically: bottom to top &uarr;"
  }

  const wrapColumn = {
    display: "flex",
    flexWrap: "wrap-reverse",
    flexDirection: "column",
    mainAxis: "Vertically: top to bottom &darr;",
    crossAxis: "Horizontally: right to left &larr;",
    maxHeight: "35rem" /* so that items wrap */
  }

  const wrapColumnRev = {
    display: "flex",
    flexWrap: "wrap-reverse",
    flexDirection: "column-reverse",
    mainAxis: "Vertically: bottom to top &uarr;",
    crossAxis: "Horizontally: right to left &larr;",
    maxHeight: "35rem" /* so that items wrap */
  }



  return (
    <div className="App">
      <FlexDirection container={wrapRow}/>
      <FlexDirection container={wrapRowRev}/>
      <FlexDirection container={wrapRevRow}/>
      <FlexDirection container={wrapRevRowRev}/>
      <FlexDirection container={wrapColumn}/>
      <FlexDirection container={wrapColumnRev}/>
    </div>
  );
}

export default App
