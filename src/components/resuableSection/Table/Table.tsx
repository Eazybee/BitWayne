import React, { FC } from 'react';
import styled, { StyledComponent } from 'styled-components';
import styles from './styled.css';

type Props = { data?: Subscriber[] };

export type Subscriber = {
  username: string;
  email: string;
  mobile: string;
};

const Table: FC<Props> & {
  Styled: StyledComponent<'table', any, {}, never>;
} = ({ data }: Props) => (
  <Table.Styled>
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Mobile No.</th>
      </tr>
    </thead>
    <tbody>
      {data?.map((d) => (
        <tr key={`${d.email}${d.username}${d.mobile}`}>
          <td>
            <span>
              {d.username}
            </span>
          </td>
          <td>
            <span>{d.email}</span>
          </td>
          <td>
            <span>{d.mobile}</span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table.Styled>
);

Table.Styled = styled.table`
  ${styles}
`;

export default Table;
