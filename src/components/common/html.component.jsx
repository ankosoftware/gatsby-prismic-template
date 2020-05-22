import React from 'react';
export const Html = ({html, className}) => {
  if (!html) {
    return null;
  }
  return (
    <div className={className} dangerouslySetInnerHTML={{__html: html}}>
    </div>
  )
}
