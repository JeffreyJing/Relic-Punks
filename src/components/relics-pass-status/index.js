import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import './index.css';

const RelicsPassStatus = () => {
    const [hasPass, setHasPass] = useState(false);

    console.log("here")

    return (
        <p>Relics Pass <span className={
            hasPass
                ? 'has-pass'
                : 'no-pass'
        }>{
            hasPass
                ? <FontAwesomeIcon icon="fa-solid fa-circle-check" />
                : <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
        }</span></p>
    )
}

export default RelicsPassStatus;