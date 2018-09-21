# Project 2

This project revolves around making an online exhibition of sound, svg-images, and text. This single page application uses React and AJAX. With responsive web design, the exhibition will adapt to changes made to the screen size or devices used.

## React
The create-react-app npm package was used to set up the initial project. No other packages has been used. The app is structured into multiple stateful and stateless components:
- **App**: This is the main component containing most of the logic of the application. This is also the parent for all the following components.
- **CatSelect**: This component renders the category selection. It reports back to the App component every time the user selects a category.
- **TabSelect**: This component renders the tabs for switching between different content. Just like the CatSelect component, it reports back to App when a user selects a tab.
- **Content**: This is a stateless component responsible for rendering the media. It has three very simple subcomponents for rendering of each media (image, text, audio).

## Media
We have three different kinds of media: image, text and audio. These are all located in the public folder in their respective subcategory folder.
- Images are saved as SVG, which is an XML-based format. We have one .svg file per image.
- Text is saved as JSON in the public folder. We have one JSON file per category.
- Audio is saved as mp3 files. This is because it is a compressed format with good sound quality and is well suited for web.

## Ajax
We used the Fetch API for making AJAX calls in the application. It allowed us to load and use the SVG images and JSON files located in the public folder.
- Images (SVG) are fetched in plain text
- Text (JSON) is fetched and interpreted as JavaScript objects

## Local storage
Images and text are loaded on demand. This means that we only load as much data as needed. We also cache already loaded images and text files in the state variable of React, so we only need to load a resource once (until the page refreshes).

## JSON usage for text
We have used one JSON file per text category. Originally we thought our alternatives were to have one file per text, or just a single one. One single file would show off the strength of JSON’s hierarchy, but would result in us having to cache all texts on the first load. Having one JSON per text would allow us to only load the text we needed at the time, but would defeat a lot of the purpose of using JSON. Having one file per category was a choice made to show off the best of both worlds. The idea wasn’t that this would be the best solution, just that it would show off and demonstrate both methods.

## Responsive Web Design
By making the design responsive we made sure that the web page would work intuitively to the user’s screen or device. This was done with the use of a few different components:
- **Viewport**: Viewport optimizes the web page for different screen sizes and devices. Using the viewport tag gives the browser instructions on how to control the page’s dimensions and scaling.
- **Media-queries**: Media queries makes it possible to specify CSS based on the device and whether it matches the media query criteria. It makes it easier to specify how the web page should look depending on the height and width of the user device. While viewport is for the entire content, media queries deals with the container within.
- **Scaling images**: Responsive images adjusts to fit the screen of the user device. Images often have a fixed size which can result in having to scroll to see the full image on smaller devices. With the responsive layout the images will scale down to fit widthwise within the screen.
- **Layout**: Using either flexbox or CSS-grid makes it a lot easier to have a responsive web design. In this project both flexbox and CSS-grid have been used. Flexbox, being designed for a layout in one dimension, is perfect for when the screen becomes small enough to only accommodate for one column. When the screen has a bigger width however the layout will use CSS-grid.

## Testing
We put together a small checklist for systematic testing of the application.
1. Open the app with console open to check for errors throughout the test
2. Choose a category for each media
3. Cycle all tabs
4. Test audio for all tabs
5. Change viewport width and go to step 1

Then we used this checklist to test the application on different browser. The checklist was repeated about 4 times (with different viewport width) for each browser.

| Browser | Result |
| --- | --- |
| Chrome | OK |
| Firefox | OK |
| Edge | OK |
| Opera | OK |
| Chrome(iOS) | OK |
| Safari(iOS) | OK |

## Git
We have been using git for version control (obviously) and git issues to keep track of tasks.

## Sources
All images downloaded from (https://unsplash.com/) before being downsized and converted to svg files.
All texts written by Ivar Aasen were found at (http://www.aasentunet.no/)
All lyrics from the works of Jahn Teigen were found on (https://genius.com/) 
All new year speeches by King Harald V were found on (https://www.regjeringen.no/)
Audio files are from the Unity Asset Store package: Universal Sound FX, (https://assetstore.unity.com/packages/audio/sound-fx/universal-sound-fx-17256)
