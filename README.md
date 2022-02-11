# Filter Component Project

The purpose of this project was to create a React component that could filter large arrays of data objects by their various attributes. It needed to be easy to modify by adding and removing filters.

This is a standard react app, so instructions for running it are at the bottom.

This application is made up of two components: the `Filter` and the `Data`

## How to Use the Filter
The filter is one component that tracks multiple attributes as well as the search term.
The `search` function will cause the data to render any items that have an attribute that matches the searchterm (color, size, name, etc).
The checkboxes will filter out any data points whos applicable attribute is not checked. If no boxes are checked for a given attribute, items are not filtered by that attribute.
Additional filters can easily be added by:
1. adding a new useState variable (e.g. price)
2. adding a new section element to the div.filter with a checkbox input for each option
3. set the onChange attribute appropriately to run the e=>setYourFilter(updateFilter(e.target.value, yourFilter))
4. add the necessary checks to the useEffect responsible for updating the results

If done correctly, the newly filters will work to update the results show by the `data` component.
The data component simply accepts the list on each update and displays the results.

## About
I built this project to suppliment any online shopping applications that may need to filter lots of search results. My goal was to make it as simple as possible to impliment and add on to.

Future plans:
 -  Incorporate some more interesting filters for price like a slide bar.
 -  Possible re-organization to component structure
 -  Build out an 'Apply Filters' button since large amounts of data or a high number of filters may be too heavy to allow for the auto re-renders


---
---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
