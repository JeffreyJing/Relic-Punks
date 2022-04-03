import React, { useState, useEffect } from 'react';
import './index.css';
import { Banner } from '../../components/banner';
import sneaksOfNature from '../../assets/images/sneaksofnature.png';
import { DISCORD_URL, INSTAGRAM_URL, TWITTER_URL } from '../../constants';
import { BeCurious, BuildOurBond, CreateOurCulture, DeeperNotWider, DiscordLogo, EveryVoiceMatters, Execute, ForgeOurFuture, InstagramLogo, PreserveOurPast, PursueYourPotential, TwitterLogo, ValueFirst } from '../../assets/icons/logos';
import teamImg from '../../assets/images/team.png';
import buildOurBond from '../../assets/images/bottom-banner.jpg';
import { NavLink } from 'react-router-dom';
import relicPunks from '../../assets/images/relicpunks.jpg';
import ConnectButton from '../../components/connect-button';
import Punks from '../../components/punks';

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
				<div className='relics-pass-status'>&lt;Insert relics pass status here&gt;</div>
			</div>
			<div className='under-banner'>
				<p>The "Relic Punks" are a community inspired project created by Jeff Cole.</p>
				<p>This collection is a tribute to important cultural technology of the past.</p>
			</div>
			<Punks />
			
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