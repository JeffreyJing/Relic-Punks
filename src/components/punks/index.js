import p2140 from '../../assets/images/punks/2140.jpg';
import p2140gv from '../../assets/images/punks/2140garryv.jpg';
import p2338 from '../../assets/images/punks/2338.jpg';
import p3609 from '../../assets/images/punks/3609.jpg';
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

const PUNK_ITEMS = [
    {
        image: p2140,
        id: 0
    },
    {
        image: p2140gv,
        id: 1
    },
    {
        image: p2338,
        id: 2
    },
    {
        image: p3609,
        id: 3
    },
    {
        image: p6578,
        id: 4
    },
    {
        image: p9671,
        id: 5
    },
    {
        image: patari,
        id: 6
    },
    {
        image: patm,
        id: 7
    },
    {
        image: pc3po,
        id: 8
    },
    {
        image: pcasio,
        id: 9
    },
    {
        image: pcola,
        id: 10
    },
    {
        image: pezbaked,
        id: 11
    },
    {
        image: pfootball,
        id: 12
    },
    {
        image: pgameboykevin,
        id: 13
    },
    {
        image: pgamecube,
        id: 14
    },
    {
        image: phello,
        id: 15
    },
    {
        image: pironman,
        id: 16
    },
    {
        image: pjuke,
        id: 17
    },
    {
        image: pledger,
        id: 18
    },
    {
        image: plite,
        id: 19
    },
    {
        image: pmac,
        id: 20
    },
    {
        image: pmag,
        id: 21
    },
    {
        image: pmpc,
        id: 22
    },
    {
        image: pn64,
        id: 23
    },
    {
        image: ppac,
        id: 24
    },
    {
        image: pphone,
        id: 25
    },
    {
        image: ppolaroid,
        id: 26
    },
    {
        image: ppop,
        id: 27
    },
    {
        image: pprime,
        id: 28
    },
    {
        image: pr2d2,
        id: 29
    },
    {
        image: pspeakspell,
        id: 30
    },
    {
        image: ptiffanywatch,
        id: 31
    },
    {
        image: pvw,
        id: 32
    },
    {
        image: pwalkman,
        id: 33
    },
    {
        spacer: true,
        id: 34
    },
    {
        spacer: true,
        id: 35
    }
]

const Punks = () => {
    return <div className="punks">
        {
            PUNK_ITEMS.map((item) => (
                <div className='punk-item' key={item.id}>
                    {item.spacer && <>
                    
                    </>}
                    {!item.spacer && <img src={item.image} alt={`punk id ${item.id}`} />}
                </div>
            ))
        }
    </div>
}

export default Punks;