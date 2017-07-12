import React, { Component } from 'react';
import BookList from '../containers/bookList';
import MapQuest from './mapquest';

export default class App extends Component {
  render() {
    return (
      <div>
        {/*<BookList />*/}
        <h1>MapQuest JS as a React Component</h1>
        <MapQuest/>
      </div>
    );
  }
}
