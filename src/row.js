import styled from 'styled-components';
import config from './config';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({ right, center }) => right ? 'flex-end' : center ? 'center' : 'unset'};
  align-items: ${({ bottom, middle }) => bottom ? 'flex-end' : middle ? 'center' : 'unset'};
  flex-direction: ${({ reverse }) => reverse ? 'row-reverse' : 'unset'};

  ${({ gutter }) => {
    gutter = gutter || config.gutter;
    if (typeof(gutter) === 'number') gutter = { xs: gutter };

    gutter.xl = gutter.xl || gutter.lg || gutter.md || gutter.sm || gutter.xs;
    gutter.lg = gutter.lg || gutter.md || gutter.sm || gutter.xs;
    gutter.md = gutter.md || gutter.sm || gutter.xs;
    gutter.sm = gutter.sm || gutter.xs;

    return `
      @media ${config.xl} {
        margin-right: ${gutter.xl / -2}px;
        margin-left: ${gutter.xl / -2}px;

        > div {
          padding-left: ${gutter.xl / 2}px;
          padding-right: ${gutter.xl / 2}px;
        }
      }

      @media ${config.lg} {
        margin-right: ${gutter.lg / -2}px;
        margin-left: ${gutter.lg / -2}px;

        > div {
          padding-left: ${gutter.lg / 2}px;
          padding-right: ${gutter.lg / 2}px;
        }
      }

      @media ${config.md} {
        margin-right: ${gutter.md / -2}px;
        margin-left: ${gutter.md / -2}px;

        > div {
          padding-left: ${gutter.md / 2}px;
          padding-right: ${gutter.md / 2}px;
        }
      }

      @media ${config.sm} {
        margin-right: ${gutter.sm / -2}px;
        margin-left: ${gutter.sm / -2}px;

        > div {
          padding-left: ${gutter.sm / 2}px;
          padding-right: ${gutter.sm / 2}px;
        }
      }

      @media ${config.xs} {
        margin-right: ${gutter.xs / -2}px;
        margin-left: ${gutter.xs / -2}px;

        > div {
          padding-left: ${gutter.xs / 2}px;
          padding-right: ${gutter.xs / 2}px;
        }
      }
    `
  }}
`
