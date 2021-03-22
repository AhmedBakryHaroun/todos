import React, { Component } from "react"
import "./index.css"
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <TodoList />

          <Footer />
        </div>
    )
  }
}

export default App