import React from 'react';
import isNumber from 'lodash/isNumber';
import { xl, lg, md, sm, xs } from './helpers';

export default ({ center, right, middle, bottom, reverse, children, gutter=20, ...rest }) => {
  if (isNumber(gutter)) gutter = { xs: gutter };

  gutter.xl = gutter.xl || gutter.lg || gutter.md || gutter.sm || gutter.xs;
  gutter.lg = gutter.lg || gutter.md || gutter.sm || gutter.xs;
  gutter.md = gutter.md || gutter.sm || gutter.xs;
  gutter.sm = gutter.sm || gutter.xs;

  return (
    <div className="root" {...rest}>
      {children}
      <style jsx>{`
        .root {
          display: flex;
          flex-wrap: wrap;
          justify-content: ${right ? 'flex-end' : center ? 'center' : null};
          align-items: ${bottom ? 'flex-end' : middle ? 'center' : null};
          flex-direction: ${reverse ? 'row-reverse' : null};
        }
        @media ${xl} {
          .root {
            margin-right: ${gutter.xl / -2}px;
            margin-left: ${gutter.xl / -2}px;
          }
          .root > :global(div) {
            padding-left: ${gutter.xl / 2}px;
            padding-right: ${gutter.xl / 2}px;
          }
        }
        @media ${lg} {
          .root {
            margin-right: ${gutter.lg / -2}px;
            margin-left: ${gutter.lg / -2}px;
          }
          .root > :global(div) {
            padding-left: ${gutter.lg / 2}px;
            padding-right: ${gutter.lg / 2}px;
          }
        }
        @media ${md} {
          .root {
            margin-right: ${gutter.md / -2}px;
            margin-left: ${gutter.md / -2}px;
          }
          .root > :global(div) {
            padding-left: ${gutter.md / 2}px;
            padding-right: ${gutter.md / 2}px;
          }
        }
        @media ${sm} {
          .root {
            margin-right: ${gutter.sm / -2}px;
            margin-left: ${gutter.sm / -2}px;
          }
          .root > :global(div) {
            padding-left: ${gutter.sm / 2}px;
            padding-right: ${gutter.sm / 2}px;
          }
        }
        @media ${xs} {
          .root {
            margin-right: ${gutter.xs / -2}px;
            margin-left: ${gutter.xs / -2}px;
          }
          .root > :global(div) {
            padding-left: ${gutter.xs / 2}px;
            padding-right: ${gutter.xs / 2}px;
          }
        }
      `}</style>
    </div>
  )
}
