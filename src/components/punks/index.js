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

import React, { useState, useEffect, useContext } from 'react';

import './index.css';
// import SimpleModal from 'simple-react-modal';

import { Web3Context } from '../../context/web3-context';

const PUNK_ITEMS = [
    {
        name: 'Cryptopunk #2140',
        image: p2140,
        id: 0
    },
    {
        name: 'Cryptopunk #2140 - GaryVee',
        image: p2140gv,
        id: 1
    },
    {
        name: 'Cryptopunk #2338 - 7CD3FC',
        image: p2338,
        id: 2
    },
    {
        name: 'Juke Punk',
        image: pjuke,
        id: 3
    },
    {
        name: 'Cryptopunk #6578',
        image: p6578,
        id: 4
    },
    {
        name: 'Cryptopunk #9671 - 0F70B8',
        image: p9671,
        id: 5
    },
    {
        name: 'Atari Punk',
        image: patari,
        id: 6
    },
    {
        name: 'ATM Punk',
        image: patm,
        id: 7
    },
    {
        name: 'Crypto C3P0 Punk',
        image: pc3po,
        id: 8
    },
    {
        name: 'Casio Punk',
        image: pcasio,
        id: 9
    },
    {
        name: 'Cola Punk',
        image: pcola,
        id: 10
    },
    {
        name: 'Easy Baked Punk',
        image: pezbaked,
        id: 11
    },
    {
        name: 'Gamecube Punk',
        image: pgamecube,
        id: 14
    },
    {
        name: 'Hello Punk',
        image: phello,
        id: 15
    },
    {
        name: 'Iron man Punk',
        image: pironman,
        id: 16
    },
    {
        name: 'Ledger Punk',
        image: pledger,
        id: 18
    },
    {
        name: 'Lite Punk',
        image: plite,
        id: 19
    },
    {
        name: 'Mac Punk',
        image: pmac,
        id: 20
    },
    {
        name: 'MPC Punk',
        image: pmpc,
        id: 22
    },
    {
        name: 'N64 Punk',
        image: pn64,
        id: 23
    },
    {
        name: 'Pac Punk',
        image: ppac,
        id: 24
    },
    {
        name: 'Phone Punk',
        image: pphone,
        id: 25
    },
    {
        name: 'Polaroid Punk',
        image: ppolaroid,
        id: 26
    },
    {
        name: 'Pop Punk',
        image: ppop,
        id: 27
    },
    {
        name: 'Prime Punk',
        image: pprime,
        id: 28
    },
    {
        name: 'R2D2 Punk',
        image: pr2d2,
        id: 29
    },
    {
        name: 'Speakspell Punk',
        image: pspeakspell,
        id: 30
    },
    {
        name: 'VW Punk',
        image: pvw,
        id: 32
    },
    {
        name: 'Walkman Punk',
        image: pwalkman,
        id: 33
    },
    {
        spacer: true,
        id: 34
    },
];

const MOBILE_EXTRA = 2;

const Punks = () => {
    const { connected } = useContext(Web3Context);
    const [width, setWidth] = useState(window.innerWidth);
    const [activePunk, setActivePunk] = useState(undefined);
    const [editionsMinted, setEditionsMinted] = useState({});

    useEffect(() => {
        let canceled = false;

        // TODO: GET EDITIONS MINTED COUNT FROM THE CONTRACT HERE, PROCESS

        return () => {
            canceled = true;
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
                    borderRadius: 15
                }}
                transitionSpeed={250}
            >
                {activePunkItem && (
                    <div className='active-punk'>
                        <img src={activePunkItem.image} />
                        <h2>{activePunkItem.name}</h2>
                        <p>Editions Minted: {activeEditionsMinted}</p>
                        <button>MINT PUNK</button>
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