export const scrollElementWithOffset = (el: HTMLElement, offset: number) => {
  const elementPosition = el.offsetTop - offset;
  window.scroll({
    top: elementPosition,
    left: 0,
    behavior: "smooth"
  });
};
