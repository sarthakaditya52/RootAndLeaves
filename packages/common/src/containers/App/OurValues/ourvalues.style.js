import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
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
    .icon__wrapper {
      position: relative;
      background: inherit;
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }
    }
  }
`;

export default FeatureSectionWrapper;
