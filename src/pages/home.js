import React from 'react';
import ArtBanner from '../assets/home_art_banner.png';
import {ReactComponent as TwitchIcon} from '../assets/icons/twitch_icon.svg';
import {ReactComponent as TwitterIcon} from '../assets/icons/twitter_icon.svg';
import {ReactComponent as InstagramIcon} from '../assets/icons/instagram_icon.svg';

class Home extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <img src={ArtBanner} alt="Cannot find header"/>
                <hr/>
                <div className="HomeContent">
                    <h3>Hey there all you cool cats and kittens!</h3>
                    <p>Text will go here</p>
                    <p>Maybe here I will ask you to give me money and drop coin in my paypal</p>
                    <p>Maybe here I can have a link to something like etsy where you can buy my art</p>
                    <p>Discord link goes here</p>
                    <p>
                        Something something my&nbsp;
                        <a href="https://www.behance.net/mechanicalsquirrell">portfolio</a>
                    </p>
                    <p>
                        obligatory twitch link - &nbsp;
                        <a href="https://www.twitch.tv/mechanicalsquirrell">twitch.tv/mechanicalsquirrell</a>
                    </p>
                    <nav className="socialMediaLinks">
                        <a href="https://www.twitter.com/mechasquirrell" target="_blank" rel="noopener noreferrer">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.twitch.tv/mechanicalsquirrell" target="_blank" rel="noopener noreferrer">
                            <TwitchIcon />
                        </a>
                        <a href="https://www.instagram.com/mechanicalsquirrell/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                    </nav>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Home;
