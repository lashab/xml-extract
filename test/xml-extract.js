const XMLExtract = require('../lib/xml-extract.js');
const assert = require('assert');

const XML = `
<urlset xmlns="http://example.com">
  <url>
    <loc>http://www.example.com/1</loc>
  </url>
</urlset>`;

describe('XML extract', () => {
  it('should extract <loc> without tags', () => {
    XMLExtract(XML, 'loc', false, (error, element) => {
      if (error) {
        throw new Error(error);
      }

      assert.equal(element, 'http://www.example.com/1');

    });
  });

  it('should extract <loc> with tags', () => {
    XMLExtract(XML, 'loc', true, (error, element) => {
      if (error) {
        throw new Error(error);
      }

      assert.equal(element, '<loc>http://www.example.com/1</loc>');

    });
  });
});
