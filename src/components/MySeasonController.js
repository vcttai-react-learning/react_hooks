import React from 'react';
import MySeasonDisplay from './MySeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

const MySeasonController = () => {
    const [lat, errMessage] = useLocation();

    let content;
    if (errMessage) {
        content = <div>Error: {errMessage}</div>;
    } 
    else if (lat) {
        content = <div><MySeasonDisplay lat={lat} /></div>;
    }
    else {
        content = <Spinner message="Getting Location ..."/>;
    }

    return (
        <div className="border red">
            {content}
        </div>
    );
}

export default MySeasonController;