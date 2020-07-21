import React from 'react';

import './Backdrop.css';

interface Props {
    toogleSideDrawer: () => void;
}

const Backdrop: React.FC<Props> = ({toogleSideDrawer}) => (
    <div className="backdrop" onClick={toogleSideDrawer}></div>
)

export default Backdrop;