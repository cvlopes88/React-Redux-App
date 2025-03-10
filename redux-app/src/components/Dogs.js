import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getDog } from './store/actions';

const Dogs = ({ getDog, dog, isFetching, error }) => {
  useEffect(() => {
    
    getDog();
  }, [getDog]);

  if (isFetching) {
    return <h2>Fetching cute dogs</h2>;
  }

  return (
    <>
    <h1>wow</h1>
      <img src={dog}></img>
      
      <button className="dogButton" onClick={getDog}>Fetch Dog</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    
    dog: state.dog,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getDog }
)(Dogs);