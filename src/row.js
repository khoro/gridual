import React from 'react';

export default ({ children }) => {
  const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: '-15px',
    marginLeft: '-15px'
  }

  return (
    <div style={styles}>
      {children}
    </div>
  )
}
