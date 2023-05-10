import React, { Component } from 'react'
import {Navigation} from "./Navigation/Navigation"
import {WordList} from "./WordList/WordList"
import {WordsForm} from "./WordsForm/WordsForm"

export class App extends Component {

state = {
words: [{id:1, uaword: "Пpивiт", enWord: "Hi", isChecked: false},
{id:2, uaword: "Я", enWord: "I", isChecked: false}
],
filter: "",
}

  render() {
    return (
      <div>
<Navigation/>
<WordList words={this.state.words}/>
<WordsForm/>

      </div>
    )
  }
}
