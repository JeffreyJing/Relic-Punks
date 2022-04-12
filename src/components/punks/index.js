import p2140 from '../../assets/images/punks/2140.jpg';
import p2140gv from '../../assets/images/punks/2140garyv.jpg';
import p2338 from '../../assets/images/punks/2338.jpg';
import p6578 from '../../assets/images/punks/6578.jpg';
import p9671 from '../../assets/images/punks/9671.jpg';
import patari from '../../assets/images/punks/atari.jpg';
import patm from '../../assets/images/punks/atm.jpg';
import pc3po from '../../assets/images/punks/c3po.jpg';
import pcasio from '../../assets/images/punks/casio.jpg';
import pcola from '../../assets/images/punks/cola.jpg';
import pezbaked from '../../assets/images/punks/ezbaked.jpg';
import pgamecube from '../../assets/images/punks/gamecube.jpg';
import phello from '../../assets/images/punks/hello.jpg';
import pironman from '../../assets/images/punks/ironman.jpg';
import pledger from '../../assets/images/punks/ledger.jpg';
import plite from '../../assets/images/punks/lite.jpg';
import pmac from '../../assets/images/punks/mac.jpg';
import pmpc from '../../assets/images/punks/mpc.jpg';
import pn64 from '../../assets/images/punks/n64.jpg';
import ppac from '../../assets/images/punks/pac.jpg';
import pphone from '../../assets/images/punks/phone.jpg';
import ppolaroid from '../../assets/images/punks/polaroid.jpg';
import ppop from '../../assets/images/punks/pop.jpg';
import pprime from '../../assets/images/punks/prime.jpg';
import pr2d2 from '../../assets/images/punks/r2d2.jpg';
import pspeakspell from '../../assets/images/punks/speakspell.jpg';
import pvw from '../../assets/images/punks/vw.jpg';
import pwalkman from '../../assets/images/punks/walkman.jpg';
import pjuke from '../../assets/images/punks/juke.jpg';
import psurprise from '../../assets/images/punks/surprise.jpg'
import relicPunksAbi from '../../assets/abis/relic-punks-abi.json';
import relicPassAbi from '../../assets/abis/relic-pass-abi.json';

import React, { useState, useEffect, useContext } from 'react';

import './index.css';
// import SimpleModal from 'simple-react-modal';

import { Web3Context } from '../../context/web3-context';
import { CONTRACT_ADDRESS, RELIC_PASS_CONTRACT_ADDRESS } from '../../constants';

const PUNK_ITEMS = [
    {
        name: 'Pixel Perfect',
        image: p2140,
        id: 0
    },
    {
        name: 'Amped Ape',
        image: p2140gv,
        id: 1
    },
    {
        name: 'Teacher\'s Pet',
        image: p2338,
        id: 2
    },
    {
        name: 'Broken Record',
        image: pjuke,
        id: 3
    },
    {
        name: 'Sketched Out',
        image: p6578,
        id: 4
    },
    {
        name: 'Tuned Out',
        image: p9671,
        id: 5
    },
    {
        name: 'Bundle of Joy',
        image: patari,
        id: 6
    },
    {
        name: 'Money Talks',
        image: patm,
        id: 7
    },
    {
        name: 'Strange Computer',
        image: pc3po,
        id: 8
    },
    {
        name: 'Golden Hour',
        image: pcasio,
        id: 9
    },
    {
        name: 'Ice Cold',
        image: pcola,
        id: 10
    },
    {
        name: 'Icing on Top',
        image: pezbaked,
        id: 11
    },
    {
        name: 'Fair and Square',
        image: pgamecube,
        id: 12
    },
    {
        name: 'Class Clown',
        image: phello,
        id: 13
    },
    {
        name: 'Mark 1',
        image: pironman,
        id: 14
    },
    {
        name: 'Security Blanket',
        image: pledger,
        id: 15
    },
    {
        name: 'Bright Side',
        image: plite,
        id: 16
    },
    {
        name: 'Hot Wallet',
        image: pmac,
        id: 17
    },
    {
        name: 'Face the Music',
        image: pmpc,
        id: 18
    },
    {
        name: 'Cheat Code',
        image: pn64,
        id: 19
    },
    {
        name: 'Bite Me',
        image: ppac,
        id: 20
    },
    {
        name: 'Dialed In',
        image: pphone,
        id: 21
    },
    {
        name: 'Instant Gratification',
        image: ppolaroid,
        id: 22
    },
    {
        name: 'Double Toasted',
        image: ppop,
        id: 23
    },
    {
        name: 'Keep on Truckin\'',
        image: pprime,
        id: 24
    },
    {
        name: 'Space Junk',
        image: pr2d2,
        id: 25
    },
    {
        name: 'Speak Up',
        image: pspeakspell,
        id: 26
    },
    {
        name: 'Bugged Out',
        image: pvw,
        id: 27
    },
    {
        name: 'Loud Mouth',
        image: pwalkman,
        id: 28
    },
    {
        name: 'Surprise',
        image: psurprise,
        id: 29
    },
];

const MOBILE_EXTRA = 2;

const Punks = () => {
    const { connected, web3, address } = useContext(Web3Context);
    const [width, setWidth] = useState(window.innerWidth);
    const [activePunk, setActivePunk] = useState(undefined);
    const [editionsMinted, setEditionsMinted] = useState({});
    const [passIdsOwned, setPassIdsOwned] = useState({});
    const [selectedPassId, setSelectedPassId] = useState(undefined);
    const [error, setError] = useState(undefined);

    useEffect(async () => {

        let interval = setInterval(async () => {

          if (!connected) {
            return;
          }

          try {
            const punksContract = createPunksContract();
            const _editionsMinted = await punksContract.methods.getPunksEditionCounter().call();
    
            const passContract = createPassContract();
            const tokenIdsOwned = (await passContract.methods.walletOfOwner(address).call()).map(d => Number(d));
            const isClaimableStates = await punksContract.methods.arePassIdsClaimable(tokenIdsOwned).call();
    
            const _passStates = {};
            tokenIdsOwned.forEach((tokenId, i) => {
              _passStates[tokenId] =  isClaimableStates[i];
            });
    
            setPassIdsOwned(_passStates);
            // convert string -> number
            setEditionsMinted(_editionsMinted.map(d => Number(d)));
          } catch(e) {
            console.log("ERROR", e);
          }
        }, 1000);

        return () => {
            // canceled = true;
            if (interval) {
              clearInterval(interval);
            }
        }
    }, [connected])

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    const extraPunks = [];
    if (width < 1000) {
        for (let i = 0; i < MOBILE_EXTRA; i++) {
            extraPunks.push({
                spacer: true,
                id: PUNK_ITEMS.length + i
            });
        }
    }

    async function mint(activePunkId) {
      if (selectedPassId === undefined) {
        return;
      }
      const punksContract = createPunksContract();

      const tx = {
        from: address,
        to: CONTRACT_ADDRESS,
        data: punksContract.methods.mint(selectedPassId, activePunkId).encodeABI()
      };

      const receipt = await web3.eth.sendTransaction(tx);
      console.log("RECEIPT", receipt);
    }
    
    const activePunkItem = activePunk !== undefined ? PUNK_ITEMS[activePunk] : undefined;
    const activeEditionsMinted = activePunkItem ? (editionsMinted[activePunkItem.id] ?? 0) : 0;

    return (
        <>
            <SimpleModal
                show={activePunk !== undefined} onClose={() => setActivePunk(undefined)}
                containerStyle={{
                    backgroundColor: 'black',
                    width: width < 1000 ? 300 : 500,
                    padding: width < 1000 ? 10 : 20,
                    borderRadius: 15,
                }}
                // style={{
                //   height: 'fit-content'
                // }}
                transitionSpeed={250}
            >
                {activePunkItem && (
                    <div className='active-punk'>
                        <img src={activePunkItem.image} />
                        <h2>{activePunkItem.name}</h2>
                        <p>Editions Minted: {activeEditionsMinted}</p>

                        <div>
                          <h3>Select a pass to mint with</h3>
                          <div className='relic-passes'>
                            {Object.keys(passIdsOwned).map((passId) => (
                              <button
                                className={`pass-id-button ${passIdsOwned[passId] ? '' : 'pass-claimed'} ${selectedPassId === passId ? 'pass-active' : ''}`}
                                onClick={() => {
                                  if (passIdsOwned[passId]) {
                                    setSelectedPassId(passId);
                                  }
                                }}
                              >
                                #{passId}
                              </button>
                            ))}
                          </div>
                        </div>
                        <button
                          className={`${selectedPassId === undefined ? 'mint-punk-disabled' : ''}`}
                          onClick={() => {
                            mint(activePunkItem.id);
                          }}
                        >MINT PUNK</button>
                        
                    </div>
                )}
            </SimpleModal>
            <div className="punks">
                {
                    [...PUNK_ITEMS, ...extraPunks].map((item, i) => (
                        <div className={`punk-item ${item.spacer ? 'is-spacer' : ''}`} key={item.id} role='button' onClick={() => {
                            if (!item.spacer) {
                                setActivePunk(i);
                            }
                        }}>
                            {item.spacer && <div className='punk-spacer'>
                                <div>?</div>
                            </div>}
                            {!item.spacer && <img src={item.image} alt={`punk id ${item.id}`} />}
                        </div>
                    ))
                }
            </div>
        </>
    )

    function createPunksContract() {
      return new web3.eth.Contract( 
        relicPunksAbi,
        CONTRACT_ADDRESS,
        {
          from: address
        }
      );
    }

    function createPassContract() {
      return new web3.eth.Contract(
        relicPassAbi,
        RELIC_PASS_CONTRACT_ADDRESS,
        {
          from: address
        }
      )
    }
}

var modal = {
    position: 'fixed',
    fontFamily: 'Arial, Helvetica, sans-serif',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.8)',
    zIndex: 99999,
    transition: 'opacity 250ms ease-in',
    pointerEvents: 'auto',
    overflowY: 'auto'
  }
  
  var container = {
    width: '400px',
    position: 'relative',
    margin: '10% auto',
    padding: '5px 20px 13px 20px',
    background: '#fff'
  }
  
  var close = {
    background: '#606061',
    color: '#FFFFFF',
    lineHeight: '25px',
    position: 'absolute',
    right: '-12px',
    textAlign: 'center',
    top: '-10px',
    width: '24px',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '12px',
    boxShadow: '1px 1px 3px #000',
    cursor: 'pointer'
  }

class SimpleModal extends React.Component{

    constructor(props){
      super()
      this.hideOnOuterClick = this.hideOnOuterClick.bind(this)
      this.fadeIn = this.fadeIn.bind(this)
      this.fadeOut = this.fadeOut.bind(this)
  
      let opacity = 0,
        display = 'block',
        visibility = 'hidden'
  
      if(props.show){
        opacity = 1
        display = 'block'
        visibility = 'visible'
      }
  
      this.state = {
        opacity,
        display,
        visibility,
        show: props.show
      }
  
    }
  
    hideOnOuterClick(event){
      if(this.props.closeOnOuterClick === false) return
      if(event.target.dataset.modal && this.props.onClose instanceof Function) this.props.onClose(event)
    }
  
    componentWillReceiveProps(props){
      if(this.props.show != props.show){
        if(this.props.transitionSpeed){
          if(props.show == true) this.fadeIn()
          else this.fadeOut()
        }
        else this.setState({show: props.show})
      }
    }
  
    fadeIn(){
      this.setState({
        display: 'block',
        visibility: 'visible',
        show: true
      }, ()=>{
        setTimeout(()=>{
          this.setState({opacity: 1})
        },10)
      })
    }
  
    fadeOut(){
      this.setState({opacity: 0}, ()=>{
        setTimeout(()=>{
          this.setState({show: false})
        }, this.props.transitionSpeed)
      })
    }
  
    render(){
      if(!this.state.show) return null
      let modalStyle, containerStyle
      //completely overwrite if they use a class
      if(this.props.className){
        modalStyle = this.props.style
        containerStyle = this.props.containerStyle
      }
      else{
        modalStyle = Object.assign({}, modal, this.props.style)
        containerStyle = Object.assign({}, container, this.props.containerStyle)
      }
      if(this.props.transitionSpeed) modalStyle = Object.assign({}, this.state, modalStyle)
  
      return (
        <div {..._filteredProps(this.props)} style={modalStyle} onClick={this.hideOnOuterClick} data-modal="true">
          <div className={this.props.containerClassName} style={containerStyle}>
            {this.props.children}
          </div>
        </div>
      )
    }
  }
  
  function _filteredProps(props) {
    const filtered = Object.assign({}, props);
    [
      'containerStyle',
      'containerClassName',
      'closeOnOuterClick',
      'show',
      'onClose',
      'transitionSpeed'
    ].map( p => {
      delete filtered[p]
    })
    return filtered
  }

export default Punks;