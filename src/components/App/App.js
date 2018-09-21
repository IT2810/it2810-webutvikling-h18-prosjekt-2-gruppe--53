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
      },
      categories: {}
    };
  }

  // Fetch image for given category and tab index if it doesn't exist in cache
  fetchImage(category, tabIndex) {
    if(!(category in this.state.cache.image) || !(tabIndex in this.state.cache.image[category]))
    {
      fetch('res/images/' + category + "/tab" + tabIndex + '.svg')
      .then((res) => res.text())
      .then((data) => {
        let newCache = Object.assign({}, this.state.cache);
        let newCat = Object.assign({}, newCache.image[category]);
        newCat[tabIndex] = data;
        newCache.image[category] = newCat;
        this.setState({
          cache: newCache
        });
      });
    }
  }

  // Fetch text JSON file for given category if it doesn't exist in cache
  fetchText(category) {
    if(!this.state.cache.text[category])
    {
      fetch('res/texts/' + category + '.json')
      .then((res) => res.json())
      .then((data) => {
        let newCache = Object.assign({}, this.state.cache);
        newCache.text[category] = data;
        this.setState({
          cache: newCache
        });
      });
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

  // Load categories.json for dynamically setting categories in CatSelect component
  loadCategories() {
    fetch('res/categories.json')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        categories: data
      });
    });
  }

  componentDidMount() {
    this.loadCategories();
  }

  componentDidUpdate() {
    // Fetch image + text if possible when component gets updated
    const selectedCategory = this.state.selectedCategory;
    if (selectedCategory.image
      && selectedCategory.text
      && selectedCategory.audio
      && this.state.selectedTab !== undefined) {
      this.fetchImage(selectedCategory.image, this.state.selectedTab);
      this.fetchText(selectedCategory.text, this.state.selectedTab);
    }
  }

  getImage() {
    const category = this.state.selectedCategory.image;
    const tabIndex = this.state.selectedTab;
    const images = Object.assign({}, this.state.cache.image[category]);
    const image = images[tabIndex];
    return image;
  }

  getText() {
    const category = this.state.selectedCategory.text;
    const tabIndex = this.state.selectedTab;
    const texts = Object.assign({}, this.state.cache.text[category]);
    const text = texts['tab'+tabIndex];
    return text;
  }

  getAudio() {
    const category = this.state.selectedCategory.audio;
    const tabIndex = this.state.selectedTab;
    return 'res/audio/'+category+'/tab'+tabIndex+'.mp3';
  }

  render() {

    // Get the media content
    const image = this.getImage();
    const text = this.getText();
    const audio = this.getAudio();

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Prosjekt 2</h1>
        </header>
        <CatSelect callback={this.selectCategory} categories={this.state.categories} />
        <TabSelect callback={this.selectTab} selected={this.state.selectedTab} />
        <Content image={image} text={text} audio={audio} />
      </div>
    );
  }
}

export default App;