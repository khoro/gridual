import styled from 'styled-components';
import config from './config';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  max-width: ${({ maxWidth }) => maxWidth || config.maxWidth};
`
