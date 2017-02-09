import React from 'react';

export default ({ children, maxWidth, ...rest }) => {
  const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
    maxWidth: maxWidth || '1140px'
  }

  return (
    <div style={styles} {...rest}>
      {children}
    </div>
  )
}
