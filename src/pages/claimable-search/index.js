import { useContext, useState } from "react";
import ConnectButton from "../../components/connect-button";
import { CONTRACT_ADDRESS, RELIC_PASS_CONTRACT_ADDRESS } from "../../constants";
import { Web3Context } from "../../context/web3-context";
import relicPunksAbi from '../../assets/abis/relic-punks-abi.json';
import './index.css';

const ClaimableSearch = () => {
    const { connected, web3, address } = useContext(Web3Context);

    const [passId, setPassId] = useState(undefined);

    const [result, setResult] = useState(undefined);

    return <>
        <div className='cs-container'>
            <ConnectButton />
            <h2>Enter Relics Pass token ID</h2>
            {/* <p>Each Relics Pass is only allowed to mint a single Relic Punk. When you type in a Relic Pass ID after connecting your wallet, you will be able to see if the Pass has already claimed its Punk.</p> */}
            {
                connected && (
                    <div className='cs-container-input'>
                        {/* <p>Type in a pass ID number and click search to check the pass.</p> */}
                        <input onChange={(e) => {
                            setPassId(Number(e.target.value));
                        }} type='number' value={passId === undefined ? '' : passId} />
                        <button
                            onClick={async () => {
                                const punksContract = createContract();
                                setResult(undefined);
                                const isClaimable = await punksContract.methods.claimable(passId).call();
                                setResult(isClaimable);
                            }}
                        >
                            Search
                        </button>
                        {
                            result !== undefined && (
                                <>
                                    <div
                                        className={
                                            result ? 'cs-unclaimed' : 'cs-claimed'
                                        }
                                    >
                                        {
                                            result
                                            ? 'Unclaimed'
                                            : 'Claimed'
                                        }
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            }
        </div>
    </>

    function createContract() {
        return new web3.eth.Contract(
            relicPunksAbi,
            CONTRACT_ADDRESS,
            {
                from: address
            }
        )
    }
}

export default ClaimableSearch;