import React, { useState, useEffect } from 'react';
import './index.css';
import { Banner } from '../../components/banner';
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
				<p>Choose Wisely</p>
				<ConnectButton />
				<div className='relics-pass-status'><RelicsPassStatus /></div>
			</div>
			<div className='under-banner'>
				<p>The "Relic Punks" are a community inspired project created by Jeff Cole.</p>
				<p>This collection is a tribute to important cultural technology of the past.</p>
			</div>
			{/* <Punks /> */}

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
				<p>How do I participate in the mint, and what will they cost?</p>
				<p>I'm thinking of buying a Relics Pass NFT, is there anything to be aware of?</p>
				<p>I'm not a Relics Pass member, is there still a way to purchase a Relic Punk?</p>
				<p>How many Relic Punks will be minted in total?</p>
				<p>Which chain will the Relic Punks be minted on?</p>
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