import React, { useState, useEffect } from 'react';
import './index.css';
import sneaksOfNature from '../../assets/images/sneaksofnature.png';
import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, TWITTER_URL } from '../../constants';
import { BeCurious, BuildOurBond, CreateOurCulture, DeeperNotWider, DiscordLogo, EveryVoiceMatters, Execute, ForgeOurFuture, InstagramLogo, OpenseaLogoDark, PreserveOurPast, PursueYourPotential, TwitterLogo, ValueFirst } from '../../assets/icons/logos';
import teamImg from '../../assets/images/team.png';
import buildOurBond from '../../assets/images/bottom-banner.jpg';
import { NavLink } from 'react-router-dom';
import relicPunks from '../../assets/images/relicpunks.jpg';
import ConnectButton from '../../components/connect-button';
import Punks from '../../components/punks';
import relic from '../../assets/images/bottom-banner.jpg';
import RelicsPassStatus from '../../components/relics-pass-status';

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);
	
	return (
		<>
			<div className='main-banner'>
				<h2>RELIC PUNKS</h2>
				<p>Which One Will You Pick?</p>
				<ConnectButton />
				<div className='relics-pass-status'><RelicsPassStatus /></div>
			</div>
			<div className='under-banner'>
				<p>The "Relic Punks" are a community inspired project created by Jeff Cole.</p>
				<p>This collection is a tribute to important cultural technology of the past.</p>
			</div>
			<Punks />

			<div className='relics-pass'>
				<div className='relics-text-content'>
					<h2>RELICS PASS NFT</h2>
					<a href={OPENSEA_URL} target="_blank" rel="noopener noreferrer">
						<button className='banner-opensea' role="link">
							<OpenseaLogoDark />BUY ON OPENSEA
						</button>
					</a>
					<p>
						The Relics Pass is your access to
						the Metarelics ecosystem of products and experiences. Metarelics is
						an artist collective led by Jeff Cole
						&amp; powered by the Ikonick team.
					</p>
				</div>
				<div className='relics-image'>
					<img src={relic} alt={'Metarelic'}/>
				</div>
			</div>

			<div className='frequently-asked-questions'>
				<h2>FREQUENTLY ASKED QUESTIONS</h2>
				<p>What are Relic Punks and why do they matter?</p>
				<p className='answers'>The “Relic Punks” are a 33 piece tribute to important cultural technology of the past. The collection uses nostalgia to bring back the emotional relationship and connections we had growing up with consumer devices.</p>
				<p>How do I participate in the mint, and what will they cost?</p>
				<p className='answers'>The only way to participate in the Relic Punks mint is to be holding a Relics Pass at the time of mint.</p> 
				<p>I'm thinking of buying a Relics Pass NFT, is there anything to be aware of?</p>
				<p className='answers'>Yes. Relics Pass benefits are tied to our Terms of Use. Additionally, if you're interested in minting a Relic Punk, and minting has begun, please check to make sure the Relics Pass NFT you are purchasing hasn't been used to mint a Punk, as there is only one Punk mint per Relics Pass NFT. Metarelics makes no guarantee of NFT eligibility.</p> 
				<p>I'm not a Relics Pass member, is there still a way to purchase a Relic Punk?</p>
				<p className='answers'>Yes, as the Relic Punks begin to mint, it’s inevitable that some of them will find their way to the open market. They can be purchased on the approved OpenSea listing from Metarelics_Official. </p>
				<p>How many Relic Punks will be minted in total?</p>
				<p className='answers'>There will only be 1000 Relic Punks minted in total, one for each pass holder. If a pass holder does not claim their Relic Punk during the mint period, the total supply may be less than 1000. </p>
				<p>Which chain will the Relic Punks be minted on?</p>
				<p className='answers'>Relic Punks will be minted on the Ethereum L1 blockchain.</p>
			</div>
			
			<div className='footbar'>
				{width > 1000 && (
					<div className='footbar-r-logo'></div>
				)}
				<div className='footbar-logos'>
					<a href={TWITTER_URL} target='blank' rel='noopener noreferrer'><TwitterLogo /></a>
					<a href={INSTAGRAM_URL} target='blank' rel='noopener noreferrer'><InstagramLogo /></a>
					<a href={DISCORD_URL} target='blank' rel='noopener noreferrer'><DiscordLogo /></a>
				</div>
				<div className='footbar-powered-by'>
					<p>Powered By Ikonick</p>
					<p>&copy; Copyright 2022 - Metarelics</p>
					<div className='terms-of-use'>
						<NavLink to='/terms-of-use'>Terms of use</NavLink>
					</div>
				</div>
				{width < 1000 && (
					<div className='footbar-r-logo'></div>
				)}
			</div>
		</>
	);
}

export default Home;