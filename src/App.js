import React from "react";
import './App.css';
import imageprofile from './imageprofile.avif';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FullName: "Youssef Beji",
      Bio: "J'aurais en charge la création d’animation 3D, de la modélisation sur 3D Studio Max.",
      imgSrc: imageprofile,
      Profession: "Infographiste senior",
      show: false,
      counter: 0,
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
  };
  toggle() {
    this.setState({ bool: !this.state.bool });
    if (!this.state.bool) {
      this.setState({ counter: 0 });
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.bool ? (
          <div className="affichage">
            <img
              src={this.state.imgSrc}
              width="150px"
              height="150px"
              alt="profile"
              border-color="blue"
              border-reduce="10px"
            />
            <h4>{this.state.FullName}</h4>
            <p>{this.state.Bio} </p>
            <h4 style={{ color: "grey" }}>{this.state.Profession}</h4>
          </div>
        ) : null}
        <br /> <br />
        {this.state.bool ? (
          <div>
            {this.state.counter}
            <br />
            <br />
            <button
              style={{
                width: "80px",
                height: "50px",
                borderRadius: "5px",
                backgroundColor: "orange",
                borderColor: "orange",
              }}
              onClick={() => this.toggle()}
            >
              Hide
            </button>
          </div>
        ) : (
          <button
            style={{
              width: "80px",
              height: "50px",
              borderRadius: "5px",
              backgroundColor: "orange",
              borderColor: "orange",
            }}
            onClick={() => this.toggle()}
          >
            Show
          </button>
        )}
        <br />
      </div>
    );
  }
}
