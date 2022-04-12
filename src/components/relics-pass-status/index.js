import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import { Web3Context } from '../../context/web3-context';
import relicPassAbi from '../../assets/abis/relic-pass-abi.json';

import './index.css';
import { RELIC_PASS_CONTRACT_ADDRESS } from '../../constants';
import { Link } from 'react-router-dom';

const RelicsPassStatus = () => {
    const { connected, web3, address } = useContext(Web3Context);
    const [hasPass, setHasPass] = useState(false);

    useEffect(async () => {
        let canceled = false;

        if (connected) {
            const relicPassContract = createContract();
            const relicsPassUserBalance = await relicPassContract.methods.balanceOf(address).call();
            if (Number(relicsPassUserBalance) > 0) {
                setHasPass(true);
            }
        }

        return () => {
            canceled = true;
        };
    }, [connected]);

    return (
        <>
            <p>Relics Pass <span className={
                hasPass
                    ? 'has-pass'
                    : 'no-pass'
            }>{
                hasPass
                    ? <FontAwesomeIcon icon={faCircleCheck} />
                    : <FontAwesomeIcon icon={faCircleXmark} />
            }</span></p>
        </>
    );

    function createContract() {
        return new web3.eth.Contract(
            relicPassAbi,
            RELIC_PASS_CONTRACT_ADDRESS,
            {
                from: address
            }
        )
    }
}

export default RelicsPassStatus;