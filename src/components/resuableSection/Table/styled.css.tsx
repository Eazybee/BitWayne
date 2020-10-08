import { css } from 'styled-components';

const styles = css`
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;
  border-radius: 1rem;

  &,
  thead,
  tbody {
    width: 100%;
  }
  thead {
    background-color: #f8fafd;
    th {
      margin: 0;
      color: #6c757e;
      white-space: nowrap;
      border-top: 1px solid #e7eaf3;
      border-bottom: 3px solid #e7eaf3;
      padding: 0.625rem;
      text-align: left;

      &:first-child {
        border-top-left-radius: 1rem;
      }
      &:last-child {
        border-top-right-radius: 1rem;
      }
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: rgba(231, 234, 243, 0.4);
      }
      &:not(:last-child) td {
        border-bottom: 1px solid #e7eaf3;
      }

      td {
        white-space: nowrap;
        padding: 0.625rem;
        vertical-align: top;
        max-width: 5em;
        overflow: scroll;
      }
    }
  }
`;

export default styles;
