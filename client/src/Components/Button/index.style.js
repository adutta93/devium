import styled from "styled-components";

export const Btn = styled.button`
  background: #03a87c;
  color: #fff;
  padding: ${({ bigBtn, mediumBtn }) =>
    bigBtn ? "1.2rem 6rem" : mediumBtn ? "1rem 3rem" : "0.7rem 2.5rem "};
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-top: ${({ bigBtn, mediumBtn }) =>
    bigBtn ? "1rem" : mediumBtn ? ".8rem" : " "};
  cursor: pointer;
  &:hover {
    background: #00c792;
    transition: all 0.3s ease-out;
  }
`;
