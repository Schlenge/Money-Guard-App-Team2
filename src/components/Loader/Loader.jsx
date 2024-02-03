import React from 'react';
import { RevolvingDot } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

function Loader({ visible }) {
  return (
    <LoaderWrapper>
      <RevolvingDot
  visible={visible}
   height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    </LoaderWrapper>

  );
}

export default Loader;
