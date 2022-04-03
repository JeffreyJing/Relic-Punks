import p2140 from '../../assets/images/punks/2140.jpg';
import p2140gv from '../../assets/images/punks/2140garryv.jpg';
import p2338 from '../../assets/images/punks/2338.jpg';
import p4609 from '../../assets/images/punks/4609.jpg';
import p6578 from '../../assets/images/punks/6578.jpg';
import p9671 from '../../assets/images/punks/9671.jpg';
import patari from '../../assets/images/punks/atari.jpg';
import patm from '../../assets/images/punks/atm.jpg';
import pc3po from '../../assets/images/punks/c3po.jpg';
import pcasio from '../../assets/images/punks/casio.jpg';
import pcola from '../../assets/images/punks/cola.jpg';
import pezbaked from '../../assets/images/punks/ezbaked.jpg';
import pfootball from '../../assets/images/punks/football.jpg';
import pgameboykevin from '../../assets/images/punks/gameboykevin.jpg';
import pgamecube from '../../assets/images/punks/gamecube.jpg';
import phello from '../../assets/images/punks/hello.jpg';
import pironman from '../../assets/images/punks/ironman.jpg';
import pjuke from '../../assets/images/punks/juke.jpg';
import pledger from '../../assets/images/punks/ledger.jpg';
import plite from '../../assets/images/punks/lite.jpg';
import pmac from '../../assets/images/punks/mac.jpg';
import pmag from '../../assets/images/punks/mag.jpg';
import pmpc from '../../assets/images/punks/mpc.jpg';
import pn64 from '../../assets/images/punks/n64.jpg';
import ppac from '../../assets/images/punks/pac.jpg';
import pphone from '../../assets/images/punks/phone.jpg';
import ppolaroid from '../../assets/images/punks/polaroid.jpg';
import ppop from '../../assets/images/punks/pop.jpg';
import pprime from '../../assets/images/punks/prime.jpg';
import pr2d2 from '../../assets/images/punks/r2d2.jpg';
import pspeakspell from '../../assets/images/punks/speakspell.jpg';
import ptiffanywatch from '../../assets/images/punks/tiffanywatch.jpg';
import pvw from '../../assets/images/punks/vw.jpg';
import pwalkman from '../../assets/images/punks/walkman.jpg';

import { useState, useEffect } from 'react';

import './index.css';
import SimpleModal from 'simple-react-modal';

const PUNK_ITEMS = [
    {
        name: 'Cryptopunk #2140',
        image: p2140,
        id: 0
    },
    {
        name: 'Cryptopunk #2140 - GarryVee',
        image: p2140gv,
        id: 1
    },
    {
        name: 'Cryptopunk #2338 - 7CD3FC',
        image: p2338,
        id: 2
    },
    {
        name: 'Cryptopunk #4609',
        image: p4609,
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
        name: 'Classic Football Punk',
        image: pfootball,
        id: 12
    },
    {
        name: 'Gameboy Kevin Punk',
        image: pgameboykevin,
        id: 13
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
        name: 'Juke Punk',
        image: pjuke,
        id: 17
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
        name: 'Mag Punk',
        image: pmag,
        id: 21
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
        name: 'Tiffany Watch Punk',
        image: ptiffanywatch,
        id: 31
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

const MOBILE_EXTRA = 1;

const Punks = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [activePunk, setActivePunk] = useState(undefined); 

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

    return (
        <>
            <SimpleModal
                show={activePunk !== undefined} onClose={() => setActivePunk(undefined)}
                style={{
                    backgroundColor: 'black'
                }}
            >

            </SimpleModal>
            <div className="punks">
                {
                    [...PUNK_ITEMS, ...extraPunks].map((item) => (
                        <div className='punk-item' key={item.id} role='button' onClick={() => {
                            if (!item.spacer) {
                                setActivePunk(item.id);
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

export default Punks;