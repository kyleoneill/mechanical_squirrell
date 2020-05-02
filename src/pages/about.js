import React from 'react';
import '../style/About.css';
import Headshot from '../assets/about_headshot.png';

class About extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <img src={Headshot} alt="Cannot find header" className="AboutHeadshot"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante metus. Neque vitae tempus quam pellentesque nec. At volutpat diam ut venenatis tellus in metus vulputate eu. Elementum pulvinar etiam non quam. Tortor consequat id porta nibh venenatis cras sed felis eget. Quis hendrerit dolor magna eget est. Est velit egestas dui id ornare arcu odio. Mollis aliquam ut porttitor leo a diam sollicitudin. Consequat id porta nibh venenatis cras sed felis eget. Feugiat nibh sed pulvinar proin gravida. Arcu felis bibendum ut tristique et egestas quis. Nisi quis eleifend quam adipiscing vitae. Arcu cursus euismod quis viverra nibh cras pulvinar. Id diam vel quam elementum pulvinar etiam non. Convallis posuere morbi leo urna molestie at elementum eu.

                    In pellentesque massa placerat duis ultricies lacus. Arcu dui vivamus arcu felis bibendum ut tristique. Tellus at urna condimentum mattis pellentesque id nibh. Nunc faucibus a pellentesque sit. Scelerisque in dictum non consectetur. Pulvinar pellentesque habitant morbi tristique senectus et. Enim ut tellus elementum sagittis vitae et leo duis ut. Arcu dui vivamus arcu felis. Non enim praesent elementum facilisis leo vel fringilla est. Nunc sed id semper risus in hendrerit gravida.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante metus. Neque vitae tempus quam pellentesque nec. At volutpat diam ut venenatis tellus in metus vulputate eu. Elementum pulvinar etiam non quam. Tortor consequat id porta nibh venenatis cras sed felis eget. Quis hendrerit dolor magna eget est. Est velit egestas dui id ornare arcu odio. Mollis aliquam ut porttitor leo a diam sollicitudin. Consequat id porta nibh venenatis cras sed felis eget. Feugiat nibh sed pulvinar proin gravida. Arcu felis bibendum ut tristique et egestas quis. Nisi quis eleifend quam adipiscing vitae. Arcu cursus euismod quis viverra nibh cras pulvinar. Id diam vel quam elementum pulvinar etiam non. Convallis posuere morbi leo urna molestie at elementum eu.

                    In pellentesque massa placerat duis ultricies lacus. Arcu dui vivamus arcu felis bibendum ut tristique. Tellus at urna condimentum mattis pellentesque id nibh. Nunc faucibus a pellentesque sit. Scelerisque in dictum non consectetur. Pulvinar pellentesque habitant morbi tristique senectus et. Enim ut tellus elementum sagittis vitae et leo duis ut. Arcu dui vivamus arcu felis. Non enim praesent elementum facilisis leo vel fringilla est. Nunc sed id semper risus in hendrerit gravida.
                </p>
            </div>
        );
    }
}

export default About;
