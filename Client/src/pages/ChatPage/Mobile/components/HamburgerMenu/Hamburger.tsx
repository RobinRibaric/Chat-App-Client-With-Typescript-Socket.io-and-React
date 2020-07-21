import React from 'react';

import './Hamburger.css';

interface Props {
    toogleSideDrawer: () => void;
}

const Hamburger: React.FC<Props> = ({toogleSideDrawer}) => {

    return (
        <div className="hamburger" onClick={() => toogleSideDrawer()}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    )
}

export default Hamburger;