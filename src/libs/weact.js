module.exports = {
    wender(parent, child){
        // parent.innerHTML = "";
        parent.append(child);
    },
    cweate(element, attributes = {}, content) {
      const createdElement = document.createElement(element);
  
      for (key in attributes) {
        if (key.startsWith("on")) {
          createdElement[key] = attributes[key];
        } else {
          createdElement.setAttribute(key, attributes[key]);
        }
      }
  
      if (typeof content === "string") {
        createdElement.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        createdElement.append(content);
      } else if (content instanceof Array) {
        content.forEach(function(htmlElement) {
          createdElement.append(htmlElement);
        });
      } else {
        throw new Error("Not a valid content-type for element");
      }
  
      return createdElement;
    }
  };