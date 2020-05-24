import styled from 'styled-components';
import config from './config';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ padding }) => padding || config.container.padding}px;
  padding-right: ${({ padding }) => padding || config.container.padding}px;
  max-width: ${({ maxWidth, fluid }) => (fluid && '100%') || maxWidth || config.container.maxWidth};
`
