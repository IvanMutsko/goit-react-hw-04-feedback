import styled from '@emotion/styled';

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const Button = styled.button`
  text-transform: capitalize;

  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;

  padding: 10px 20px;

  font-size: 16px;
  font-weight: 700;

  &:hover {
    color: #552e1a;
    -webkit-box-shadow: 0px 5px 19px -3px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 0px 5px 19px -3px rgba(0, 0, 0, 0.38);
    box-shadow: 0px 5px 19px -3px rgba(0, 0, 0, 0.38);
  }
`;
