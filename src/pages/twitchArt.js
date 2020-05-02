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
                        <img src={require(`../assets/art/offline/andrevv_offline.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/offline/mechanicalsquirrel_offline.png`)} alt={this.state.artVal} />
                    </div>
                }
                {this.state.artVal === artEnum.BANNER && 
                    <div className={this.state.artVal}>
                        <img src={require(`../assets/art/banner/andrevv_banner.png`)} alt={this.state.artVal} />
                    </div>
                }
                {this.state.artVal === artEnum.LAYOUT && 
                    <div className={this.state.artVal}>
                        <img src={require(`../assets/art/layout/andrevv_discord.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/layout/andrevv_tf2.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/layout/andrevv_twitter.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/layout/andrevv_youtube.png`)} alt={this.state.artVal} />
                    </div>
                }
                {this.state.artVal === artEnum.EMOTES && 
                    <div className={this.state.artVal}>
                        <p>This is a debug string</p>
                    </div>
                }
                {this.state.artVal === artEnum.MISC && 
                    <div className={this.state.artVal}>
                        <img src={require(`../assets/art/misc/misc_ace.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/misc/misc_dwight.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/misc/misc_hag.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/misc/misc_myers.png`)} alt={this.state.artVal} />
                        <img src={require(`../assets/art/misc/misc_wow_1.png`)} alt={this.state.artVal} />
                    </div>
                }
            </div>
        );
    }
}

export default TwitchArt;