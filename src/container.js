import React from 'react';

export default ({ children }) => {
  const styles = {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '15px',
    paddingRight: '15px',
    maxWidth: '1140px'
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
