import Color from "color";

export function getLinkClass(linkStyle, defaultLinkClassName = '', defaultButtonClassName = '') {
  if(linkStyle === 'link') {
    return defaultLinkClassName;
  }
  switch (linkStyle) {
    case 'button-primary':
      return `btn btn-primary ${defaultButtonClassName}`;
    case 'button-secondary':
      return `btn btn-secondary ${defaultButtonClassName}`;
    case 'button-success':
      return `btn btn-success ${defaultButtonClassName}`;
    case 'button-danger':
      return `btn btn-danger ${defaultButtonClassName}`;
    case 'button-info':
      return `btn btn-info ${defaultButtonClassName}`;
    case 'button-light':
      return `btn btn-dark ${defaultButtonClassName}`;
    case 'button-warning':
      return `btn btn-warning ${defaultButtonClassName}`;
    default:
      return `btn btn-link ${defaultButtonClassName}`;
  }
}

export function isDark (bgColor, bgImage) {
  return (bgColor && new Color(bgColor).isDark()) || (!bgColor && bgImage);
}
