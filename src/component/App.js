import React from "react";
import "./App.css";
import Child from "./Child";


export default class App extends React.Component {
  

  render() {
    return (
      <div>
        <h2 class="text-center mb-32">Select your child</h2>
        <div class="row justify-content-center">
          <Child/>
          <Child/>
          <Child/>
        </div>

        <div class="row justify-content-center">
          <div class="col-12 col-lg-8 text-center">
            <div class="shadow-box rounded py-40 px-3">
              <h4 class="mb-2">Add another child</h4>
              <span class="d-block mb-4">You’ll need a class code from your teacher to get started.</span>
              <button class="btn btn-primary px-5 py-3 font-weight-bold add-button-width">Add Child</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
