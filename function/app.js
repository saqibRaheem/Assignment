
// QUESTION 1
function createAdder(num) {
    return function(value) {
      return num + value;
    }
  }

  const addFive = createAdder(5);
console.log(addFive(10)); // Output: 15
console.log(addFive(20)); // Output: 25
console.log(addFive(30)); // Output: 35

// QUESTION 2

function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    } else if (array[0] === value) {
      return true;
    } else {
      return searchArray(array.slice(1), value);
    }
  }

  const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); // Output: true
console.log(searchArray(myArray, 6)); // Output: false

// QUESTION 3

function addParagraph(text) {
    const paragraph = document.createElement('p'); // create a new <p> element
    const content = document.createTextNode(text); // create a text node with the provided text
    paragraph.appendChild(content); // append the text node to the <p> element
    document.body.appendChild(paragraph); // append the <p> element to the body of the HTML document
  }
  addParagraph('This is a new paragraph.');

//   QUETION 4  

function addListItem(text) {
    const listItem = document.createElement('li'); // create a new <li> element
    const content = document.createTextNode(text); // create a text node with the provided text
    listItem.appendChild(content); // append the text node to the <li> element
    const unorderedList = document.querySelector('ul'); // get the first <ul> element in the document
    unorderedList.appendChild(listItem); // append the <li> element to the <ul> element
  }
  addListItem('New Item');

//   QUESTION 5
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }
  const myElement = document.getElementById('myElement');
changeBackgroundColor(myElement, 'red');

// QUETION 6
function saveObjectToLocalStorage(key, object) {
    const objectString = JSON.stringify(object); // convert object to string
    localStorage.setItem(key, objectString); // save the string to localStorage with the provided key
  }
  const myObject = { name: 'John', age: 30 };
saveObjectToLocalStorage('myKey', myObject);

// QUETION 7
function getObjectFromLocalStorage(key) {
    const objectString = localStorage.getItem(key); // get the string stored under the provided key
    const object = JSON.parse(objectString); // parse the string to convert it back to an object
    return object;
  }
  const myObject1 = getObjectFromLocalStorage('myKey');
console.log(myObject1);

// QUESTION 8
function saveObjectPropertiesToLocalStorage(object) {
    // Save each property to localStorage using the property name as the key and the property value as the value
    for (const property in object) {
      if (object.hasOwnProperty(property)) {
        localStorage.setItem(property, object[property]);
      }
    }
    
    // Retrieve the object from localStorage and return it as a new object
    const keys = Object.keys(object);
    const retrievedObject = {};
    for (const key of keys) {
      retrievedObject[key] = localStorage.getItem(key);
    }
    return retrievedObject;
  }
  const myObject2 = { name: 'John', age: 30 };
const retrievedObject = saveObjectPropertiesToLocalStorage(myObject2);
console.log(retrievedObject);