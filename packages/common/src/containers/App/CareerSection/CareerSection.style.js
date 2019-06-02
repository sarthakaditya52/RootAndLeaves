import styled from 'styled-components';

const CareerSectionWrapper = styled.section`
  padding: 80px 0 100px;
  @media (max-width: 1440px) {
    padding: 40px 0 50px;
  }
  @media (max-width: 768px) {
    padding: 40px 0 0px;
  }
  @media (max-width: 500px) {
    padding: 30px 0;
  }

  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    .icon__wrapper {
      position: relative;
      background: transperent;
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }
  }

  .row {
    > .col {
      &:nth-child(1) {
        .feature__block {
          .icon__wrapper {
            color: #29cf8a;
            transition: all 0.6s ease;
          }
        }
      }
      &:nth-child(2) {
        .feature__block {
          .icon__wrapper {
            color: #ff86ab;
            transition: all 0.6s ease;
          }
        }
      }
      &:nth-child(3) {
        .feature__block {
          .icon__wrapper {
            color: #ff9000;
            transition: all 0.6s ease;
          }
        }
      }
    }
  }
`;

export default CareerSectionWrapper;
