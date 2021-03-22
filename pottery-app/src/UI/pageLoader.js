import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import SubtlePrism from '../assets/SubtlePrism.svg';

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: url(${SubtlePrism});
  left: 0;
  content: '';
  opacity: 1;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const GeneralPageSubTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  font-family: 'Secular One', sans-serif;
  font-size: 30px;

  @media (max-width: 1000px) {
  }
`;

const GeneralFlexboxColumnDirection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const PageLoader = () => {
  return (
    <Backdrop>
      <GeneralFlexboxColumnDirection
        style={{ position: 'relative', top: '20%', gap: 50 }}
      >
        <GeneralPageSubTitle style={{ color: 'black' }}>
          Just a minute...
        </GeneralPageSubTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
        </div>
      </GeneralFlexboxColumnDirection>
    </Backdrop>
  );
};

export default PageLoader;
