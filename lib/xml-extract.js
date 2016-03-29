'use strict';

module.exports = (XML, element, preserve, callback) => {
  if (XML && typeof XML === 'string') {
    if (element && XML.includes(element)) {
      const opening = `<${element}`;
      const closing = `</${element}>`;
      const elements = XML.split(opening);

      elements.forEach((value) => {
        if (value && value.includes(closing)) {
          const i = value.indexOf('>') + 1;
          const j = value.indexOf(closing);
          const attribute = value.substr(0, i - 1);
          value = value.substr(i, j - i);

          if (preserve) {
            value = `${opening}${attribute}>${value}${closing}`;
          }

          callback(null, value);
        }
      });
    }
    else {
      callback('element not found');
    }
  }
  else {
    callback('XML not found');
  }
};
