import { Component } from "react";
import './App.scss';
import logo from '../img/blackshape.jpg'
class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Never say never',
      id: 1,
    }
  }


  onChange = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => {

        this.setState(() => {
          return {
            name: data.slip.advice,
            id: data.slip.id
          }
        })

      })
  }




  render() {

    return (
      <div className="wrapper">
        <h1>
          Advice: #{this.state.id}
        </h1>
        <p>
          "{this.state.name}"
        </p>

        <div className="line">
          <div className="lines"></div>
          <div className="shapes"></div>
          <div className="shapes"></div>
          <div className="lines"></div>
        </div>

        <div className="btn">
          <button onClick={() => this.onChange()}>
            <img src={logo}/>
          </button>
        </div>
      </div>
    )
  }
}

export default App
