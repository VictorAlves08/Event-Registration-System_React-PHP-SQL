import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  width: 70%;
  height: 70%;

  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 90%;

  gap: 12px;

  .body-top, .body-bottom {
    display: flex;

    width: 100%;
    height: 50%;

    white-space: nowrap;
  }

  .body-top {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    p{
      overflow: hidden;
      text-overflow: ellipsis;
    }

    img {
      width: 30%;
      height: 100%;
      object-fit: cover;
    }

    .body-top-info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 280px;
      height: 100%;
    }
  }

  .body-bottom{
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .body-bottom-info{
      width: 30%;
      height: 100%;

      overflow: auto;

      p{
        white-space: break-spaces;
      }
    }

    .body-bottom-comments{
      width: 30%;
      height: 90%;

      overflow: auto;

      .body-bottom-score{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        a{
          color: red;
          cursor: pointer;
        }
      }

      p{
        border-bottom: 1px solid black;
        padding-bottom: 5px;
        white-space: break-spaces;

        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .body-bottom-btns{
      width: 25%;
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;

      gap:8px;

      textarea{
        width: 100%;
        height: 100%;
        border: 1px solid black;
        resize: none;
        padding: 1px;
      }

      select{
        width: 100%;
      }

      button{
        border: none;
        border-radius: 4px;
        padding: 6px 12px;

        font-size: 16;
        color: #fff;
        cursor: pointer;

        height: 50px;

        &:hover{
          color: #000;
          border: 0px solid #000;
        }
    }

    div{
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    }
  }

`;

export const InfoTitle = styled.p`
  font-size: 16;
  font-weight: bold;
`;
