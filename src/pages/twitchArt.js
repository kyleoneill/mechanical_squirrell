import React from 'react';
import '../style/TwitchArt.css';
import { Navbar } from 'react-bootstrap';

const artEnum = {
    OFFLINE: 'Offline',
    BANNER: 'Banner',
    LAYOUT: 'Layout',
    EMOTES: 'Emotes',
    MISC: 'Misc'
}
//need to add wolfey and syaxx
const offlineScreens = [
    require("../assets/art/offline/mechanicalsquirrel_offline.png"),
    require("../assets/art/offline/laikadoggo_offline.png"),
    require("../assets/art/offline/andrevv_offline.png")
];
//ask emily whats missing
const banners = [
    require("../assets/art/banner/andrevv_banner.png")
];
//ask emily whats missing
const layouts = [
    require(`../assets/art/layout/andrevv_discord.png`),
    require(`../assets/art/layout/andrevv_tf2.png`),
    require(`../assets/art/layout/andrevv_twitter.png`),
    require(`../assets/art/layout/andrevv_youtube.png`)
];
//need to add wolfey
const emotes = [

];
//what else?
const misc = [
    require(`../assets/art/misc/misc_ace.png`),
    require(`../assets/art/misc/misc_dwight.png`),
    require(`../assets/art/misc/misc_hag.png`),
    require(`../assets/art/misc/misc_myers.png`),
    require(`../assets/art/misc/misc_wow_1.png`)
];

class TwitchArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artVal: null
        };
    }
    componentDidMount() {
        this.setState({
            artVal: artEnum.OFFLINE
        });
    }
    handleArtSelectClick(newArtVal) {
        this.setState({
            artVal: newArtVal
        })
    }
    render() {
        return (
            <div className={this.props.name}>
                <Navbar className="ArtSelectBar">
                    <button onClick={() => this.handleArtSelectClick(artEnum.OFFLINE)}>Offline Screens</button>
                    <button onClick={() => this.handleArtSelectClick(artEnum.BANNER)}>Banners</button>
                    <button onClick={() => this.handleArtSelectClick(artEnum.LAYOUT)}>Layout Components</button>
                    <button onClick={() => this.handleArtSelectClick(artEnum.EMOTES)}>Emotes</button>
                    <button onClick={() => this.handleArtSelectClick(artEnum.MISC)}>Misc</button>
                </Navbar>
                {this.state.artVal === artEnum.OFFLINE && 
                    <div className={this.state.artVal}>
                        {offlineScreens.map(i => <img src={i} alt={this.state.artVal} />)}
                    </div>
                }
                {this.state.artVal === artEnum.BANNER && 
                    <div className={this.state.artVal}>
                        {banners.map(i => <img src={i} alt={this.state.artVal} />)}
                    </div>
                }
                {this.state.artVal === artEnum.LAYOUT && 
                    <div className={this.state.artVal}>
                        {layouts.map(i => <img src={i} alt={this.state.artVal} />)}
                    </div>
                }
                {this.state.artVal === artEnum.EMOTES && 
                    <div className={this.state.artVal}>
                        {emotes.map(i => <img src={i} alt={this.state.artVal} />)}
                    </div>
                }
                {this.state.artVal === artEnum.MISC && 
                    <div className={this.state.artVal}>
                        {misc.map(i => <img src={i} alt={this.state.artVal} />)}
                    </div>
                }
            </div>
        );
    }
}

export default TwitchArt;