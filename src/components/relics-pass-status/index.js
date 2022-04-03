import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
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
                ? <FontAwesomeIcon icon={faCircleCheck} />
                : <FontAwesomeIcon icon={faCircleXmark} />
        }</span></p>
    )
}

export default RelicsPassStatus;