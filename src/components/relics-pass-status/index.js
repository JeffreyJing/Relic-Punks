import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useContext, useEffect } from 'react/cjs/react.production.min';
import { Web3Context } from '../../context/web3-context';

import './index.css';

const RelicsPassStatus = () => {
    const { connected } = useContext(Web3Context);
    const [hasPass, setHasPass] = useState(false);

    useEffect(async () => {
        let canceled = false;

        if (connected) {
            // TODO: READ CONTRACT HERE AND SET HAS PASS BASED ON THAT
        }

        return () => {
            canceled = true;
        };
    }, [connected])

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