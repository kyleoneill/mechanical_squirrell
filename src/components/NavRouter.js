import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from 'react';
import Home from '../pages/home';
import About from '../pages/about';
import TwitchArt from '../pages/twitchArt';
import Contact from '../pages/contact';

//Other Art
//Commissions

class NavRouter extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <Router>
                    <div>
                        <Navbar className="navbar">
                            <LinkContainer to="/">
                                <button>Home</button>
                            </LinkContainer>
                            <LinkContainer to="/About">
                                <button>About</button>
                            </LinkContainer>
                            <LinkContainer to="/TwitchArt">
                                <button>Twitch Art</button>
                            </LinkContainer>
                            <LinkContainer to="/Contact">
                                <button>Contact</button>
                            </LinkContainer>
                        </Navbar>
                        <Switch>
                            <Route path="/About">
                                <About name={"AboutSection"} />
                            </Route>
                            <Route path="/TwitchArt">
                                <TwitchArt name={"TwitchArtSection"} />
                            </Route>
                            <Route path="/Contact">
                                <Contact name={"ContactSection"} />
                            </Route>
                            <Route path="/">
                                <Home name={"HomeSection"} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default NavRouter;
