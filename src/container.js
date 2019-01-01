import React from 'react';

export default ({ children, maxWidth, ...rest }) => {
  return (
    <div {...rest}>
      {children}
      <style jsx>{`
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        max-width: ${maxWidth || '1180px'}
      `}</style>
    </div>
  )
}
