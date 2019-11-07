module.exports = {
    wender(parent, child){
        // parent.innerHTML = "";
        parent.append(child);
    },
    cweate(element, attributes = {}, content) {
      const cweatedElement = document.createElement(element);
  
      for (key in attributes) {
        if (key.startsWith("on")) {
          cweatedElement[key] = attributes[key];
        } else {
          cweatedElement.setAttribute(key, attributes[key]);
        }
      }
  
      if (typeof content === "string") {
        cweatedElement.innerHTML = content;
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