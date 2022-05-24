export function calculateElementWidth(element, includeMargin = false) {
  let style = element.currentStyle || window.getComputedStyle(element);
  let width = element.offsetWidth;
  let margin = 0, padding = 0;
  if (includeMargin) {
    margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    padding = parseFloat(style.paddingLeft) +
              parseFloat(style.paddingRight);
  }
  let border = parseFloat(style.borderLeftWidth) +
               parseFloat(style.borderRightWidth);

  return width + margin - padding + border;
}

export function calculateElementHeight(element, includeMargin = false) {
  let style = element.currentStyle || window.getComputedStyle(element);
  let height = element.offsetHeight;
  let margin = 0, padding = 0;
  if (includeMargin) {
    margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
    padding = parseFloat(style.paddingLeft) +
              parseFloat(style.paddingRight);
  }
  let border = parseFloat(style.borderTopWidth) +
               parseFloat(style.borderBottomWidth);

  return height + margin - padding + border;
}

export function calculateScrollPercentage(element): number {
  let h = element, b = document.body, st = 'scrollTop', sh = 'scrollHeight';
  return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}
