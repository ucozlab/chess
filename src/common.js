
export const setElementStyles = (element, styles) => {
  for (let property in styles) {
    element.style[property] = styles[property];
  }
}
