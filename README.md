# xml-extract

Node module for extracting elements from XML

## Installtion

```sh 
npm install xml-extract
```

## Usage

```javascript
const XML = `
<urlset xmlns="http://www.example.com">
  <url>
    <loc>http://www.example.com/1</loc>
  </url>
  <url>
    <loc>http://www.example.com/2</loc>
  </url>
  <url>
    <loc>http://www.example.com/3</loc>
  </url>
<urlset>`

const XMLExtract = require('xml-extract');

// Extract ```html <loc>``` without tags
XMLExtract(XML, 'loc', false, (error, element) => {
  if (error) {
    throw new Error(error);
  }

  console.log(element);

  // output: 
  // http://www.example.com/1
  // http://www.example.com/2
  // http://www.example.com/3
});

// Extract ```html <loc>``` with tags
XMLExtract(XML, 'loc', true, (error, element) => {
  if (error) {
    throw new Error(error);
  }

  console.log(element);

  // output: 
  // <loc>http://www.example.com/1</loc>
  // <loc>http://www.example.com/2</loc>
  // <loc>http://www.example.com/3</loc>
});
```

## Test

```sh
npm run test
```

