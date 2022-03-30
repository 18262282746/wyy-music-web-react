import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position:0 0 
  }
  .select-list {
    display: flex;
    line-height: 70px;
    .select-item {
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        text-decoration: none;
      }
      &:hover, a.active{
          background-color: black;
          color: white;
      }
    }
  }

`
export const HeaderRight = styled.div`
  ${'' /* display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    background-color: white;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  } */}

`