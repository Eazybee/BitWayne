import React, { FC, useContext } from 'react';
import styled, { StyledComponent, ThemeContext } from 'styled-components';
import Step, { Position } from '../Step/Step';
import Title from '../Title/Title';
import { ThemeType } from '<hooks>/useTheme';
import styles from './styled.css';
import data from './data';

const Instruction: FC<{}> & {
  Styled: StyledComponent<'section', any, {}>;
} = () => {
  const { colors } = useContext(ThemeContext) as ThemeType;
  return (
    <Instruction.Styled>
      <div>
        <Title color={colors.white}>How To Sell</Title>
        <div className="steps">
          {data.map((step, i: number) => (
            <div className={i % 2 === 0 ? 'lft' : 'rgt'}>
              {i + 1 !== data.length ? <div className="spen" /> : null}
              <Step data={step} side={i % 2 === 0 ? Position.Left : Position.Right} />
            </div>
          ))}
        </div>
        <div className="btn">
          <a href="# ">Start Trading Now</a>
        </div>
      </div>
    </Instruction.Styled>
  );
};

Instruction.Styled = styled.section`
  ${styles}
`;

export default Instruction;
