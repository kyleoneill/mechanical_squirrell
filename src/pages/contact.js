import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className={this.props.name}>
                <p>Foo</p>
            </div>
        );
    }
}

export default Contact;