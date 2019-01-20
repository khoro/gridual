import React from 'react';
import styled from 'styled-components';

export default styled.div`
  background: ${({ background='#5954d3' }) => background};
  color: #c4c1fb;
  min-height: 45px;
  margin-bottom: 30px;
  font-size: 15px;
  border-radius: 2px;
  overflow: hidden;
  display: ${({ withText }) => withText ? 'flex' : 'block'};
  padding: ${({ hasNested }) => hasNested ? '30px 30px 0' : '0'};
  font-weight: 500;
  align-items: center;
  justify-content: center;
`
