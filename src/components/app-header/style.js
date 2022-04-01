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
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        text-decoration: none;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      &:hover, a.active{
          background-color: black;
          color: white;
      }
      .active .cor {
        position: absolute;
        bottom:0;
        left:50%;
        margin-left: -6px;
        border-width: 6px;
        border-color:transparent transparent #C20C0C transparent;
        border-style:solid;
      }
    }
  }

`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  }
  .create-center {
    display: block;
    width: 90px;
    height: 32px;
    margin: 0 20px 0 12px;
    border: 1px solid #ccc;
    background-color: #222;
    color: #ccc;
    border-radius: 20px;
    line-height:32px;
    text-align: center;
    &:hover{
      color:white;
      border-color: white;
      text-decoration: none;
    }
  }

`