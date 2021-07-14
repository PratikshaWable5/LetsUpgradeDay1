import React from "react"
import ReactDom from "react-dom"
import "./App.css"
import "./Button"
import Button_fun from "./Button"

const Apple=()=> {
  return (
    <div>
      <h1>Hello World </h1>
      <p>This is first React UI design</p>
      <div className="buttondiv">
      <Button_fun buttonText="Submit"/>
      <Button_fun buttonText="Clear"/></div>
    </div>
  );
}

export default Apple
