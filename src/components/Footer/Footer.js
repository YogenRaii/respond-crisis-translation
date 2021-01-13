import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><a href="/legal">LEGAL</a></li>
                    <li><a href="/legal">PRIVACY</a></li>
                    <li><a href="/legal">SECURITY</a></li>
                    <li><a href="/legal">HELP</a></li>
                </ul>
                Respond Crisis Translators Network
                <br/>
                2019-20
            </div>
        );
    }
}

export default Footer;