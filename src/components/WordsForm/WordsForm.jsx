import React from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';

export class WordsForm extends React.Component {
  state = {
    uaWord: '',
    enWord: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const word = {
      id: nanoid(5),
      isChecked: false,
      ...this.state
    };
    this.props.addWord(word);
    this.setState({ uaWord: '', enWord: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <TextField
          value={this.state.uaWord}
          onChange={this.handleChange}
          name="uaWord"
          id="filled-basic"
          label="UKR"
          variant="filled"
        />
        <TextField
          value={this.state.enWord}
          onChange={this.handleChange}
          name="enWord"
          id="filled-basic"
          label="ENG"
          variant="filled"
        />
        <button type="submit">Add word</button>
      </form>
    );
  }
}