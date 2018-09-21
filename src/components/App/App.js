import React, { Component } from 'react';
import './App.css';
import CatSelect from '../CatSelect/CatSelect';
import TabSelect from '../TabSelect/TabSelect';
import Content from '../Content/Content';

class App extends Component {

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    this.state = {
      selectedTab: null,
      selectedCategory: {
        image: null,
        text: null,
        audio: null
      },
      cache: {
        image: { // TODO: update image categories to what they should be
          cat0: {},
          cat1: {},
          cat2: {}
        },
        text: {}
      }
    };
  }

  getImage(category, tabIndex) {
    // TODO: implement this
    // Return the image from cache if it exists. If not, fetch and add to cache
  }

  getText(category, tabIndex) {
    if((category in this.state.cache.text) && (tabIndex in this.state.cache.text[category]))
    {
      return this.state.cache.text[category][tabIndex];
    }
    else
    {
      fetch('res/texts/' + category + '.json')
      .then((res) => res.json())
      .then((data) => {
        console.log("bing")
        let updatedCache = Object.assign({}, this.state.cache.text, {[category]: {[tabIndex]: {[Object.keys(data)[tabIndex]]: data[Object.keys(data)[tabIndex]]}}});
        this.setState({
          cache: updatedCache
        })
        return this.state.cache.text[category][tabIndex];
      })
    }
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
        <CatSelect callback={this.selectCategory} />
        <TabSelect callback={this.selectTab} selected={this.state.selectedTab} />
        <Content />
      </div>
    );
  }

}


export default App;
