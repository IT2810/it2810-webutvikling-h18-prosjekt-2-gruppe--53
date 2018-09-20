import React, { Component } from 'react';
import './App.css';
import CatSelect from '../CatSelect/CatSelect';
import TabSelect from '../TabSelect/TabSelect';
import Content from '../Content/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: null,
      selectedCategory: {
        image: null,
        text: null,
        sound: null
      },
      cache: {
        image: { // TODO: update image categories to what they should be
          cat0: {},
          cat1: {},
          cat2: {}
        },
        text: { // TODO: update text categories to what they should be

        }
      }
    };
  }

  getImage(category, tabIndex) {
    // TODO: implement this
    // Return the image from cache if it exists. If not, fetch and add to cache
  }

  getText(category, tabIndex) {
    fetch('res/texts/' + category + '.json')
    .then((res) => res.json())
    .then((data) => {
      let updatedCache = Object.assign({}, this.state.cache.text, {[category]: {[Object.keys(data)[tabIndex]]: data[Object.keys(data)[tabIndex]]} });
      this.setState({
        cache: updatedCache
      })
    })
  }

  // Select tab to show
  selectTab(tabIndex) {
    this.setState({
      selectedTab: tabIndex
    });
  }

  // Select category for the given media
  selectCategory(media, category) {
    let updatedCat = Object.assign({}, this.state.selectedCategory, {[media]: category}); // we don't want to mutate state
    this.setState({
      selectedCategory: updatedCat
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Prosjekt 2</h1>
        </header>
        <CatSelect />
        <TabSelect />
        <Content />
      </div>
    );
  }
}


export default App;
