import React from 'react';

export default ({ children, ...rest }) => {
  const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '10px',
    paddingRight: '10px',
    maxWidth: '1140px'
  }

  return (
    <div style={styles} {...rest}>
      {children}
    </div>
  )
}
