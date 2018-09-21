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
        image: {},
        text: {}
      }
    };
  }

  getImage(category, tabIndex) {
    console.log(this.state.cache.image);
    if(!(category in this.state.cache.image) || !(tabIndex in this.state.cache.image[category]))
    {
      fetch('res/texts/' + category + "/tab" + tabIndex + '.svg')
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        let updatedCache = Object.assign({}, this.state.cache, {
          image: {
            [category]: {
              ["tab"+tabIndex]: data
            }
          }
        });
        console.log(updatedCache);
        this.setState({
          cache: updatedCache
        })
      })
    }
  }

  getText(category, tabIndex) {
    if(!(category in this.state.cache.text) || !(tabIndex in this.state.cache.text[category]))
    {
      fetch('res/texts/' + category + '.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let updatedCache = Object.assign({}, this.state.cache, {
          text: {
            [category]: data
          }
        });
        console.log(updatedCache);
        this.setState({
          cache: updatedCache
        })
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
  componentDidMount() {
    this.getImage("animals", 0);
    this.getText("taler", "tab1");
  }

}


export default App;
