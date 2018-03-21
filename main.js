const appendChildren = (element, children) => {
  children.forEach(child => {
    if (Array.isArray(child)) {
      appendChildren(element, child);
    } else if (child instanceof window.Element) {
      element.appendChild(child);
    } else if (typeof child === 'string') {
      const textNode = document.createTextNode(child);
      element.appendChild(textNode);
    }
  });
};

const createElement = (type, props, ...children) => {
  const element = document.createElement(type);

  if (props) {
    Object.keys(props).forEach(propName => {
      const propValue = props[propName];
      element[propName] = propValue;

      if (propName === 'style') {
        Object.keys(propValue).forEach(styleName => {
          element.style[styleName] = propValue[styleName];
        });
      }
    });
  }

  if (children) {
    appendChildren(element, children);
  }

  return element;
};

const render = (element, container) => {
  container.appendChild(element);
};

const React = {
  createElement,
  render
};

const app = React.createElement('div', { style: { backgroundColor: 'red' } }, [
  React.createElement('span', undefined, 'Hello World'),
  React.createElement('br'),
  'This is just a text node',
  React.createElement('div', { textContent: 'Text content' })
]);

React.render(app, document.getElementById('root'));
