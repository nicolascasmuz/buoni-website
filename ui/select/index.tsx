import styled from "styled-components";

interface SelectProps {
  width?: string;
}

export const Select = styled.select<SelectProps>`
  align-self: center;
  background-color: var(--black);
  border: none;
  font-family: "Minion Pro Regular", "Times New Roman";
  font-size: 18px;
  color: var(--background);
  width: ${(props) => props.width};
  height: 45px;
`;

export const SelectResponsive = styled.select`
  align-self: center;
  background-color: var(--black);
  border: none;
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  color: var(--white);
  width: 266px;
  height: 45px;

  @media (min-width: 1069px) {
    width: 356px;
  }
`;
