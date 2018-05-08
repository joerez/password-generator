import React, { Component } from 'react'
import { random } from '../utils'

let newPassword = '';

class Password extends Component {
  constructor(props) {
    super(props)
    this.state = { password: 'p@ssw0rd' }
  }

  //make a function that generates a random index number

  generatePassword() {
    // generate a password here
    console.log("Generating password");

    //make an array with all letters
    let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '?', ':', '~', '<', '>', '-', '.'  ];

      //put that random index number inside str, and return the result

      let strChar1 = str[random(str.length)];
      let strChar2 = str[random(str.length)];
      let strChar3 = str[random(str.length)];
      let strChar4 = str[random(str.length)];
      let strChar5 = str[random(str.length)];
      let strChar6 = str[random(str.length)];
      let strChar7 = str[random(str.length)];
      let strChar8 = str[random(str.length)];

      let newPassword = strChar1 + strChar2 + strChar3 + strChar4 + strChar5 + strChar6 + strChar7 + strChar8;
      console.log(newPassword);
      return newPassword;
    }

  render() {
    return (
      <div>
        <div>{this.state.password}</div>
        <div>
          <button onClick={(e) => {
            const newPassword = this.generatePassword();
            this.setState({ password: newPassword })
          }}>Generate</button>
        </div>
      </div>
    )
  }

}

export default Password
