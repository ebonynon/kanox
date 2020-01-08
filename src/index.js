import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Banner_part from './sec_banner_part';
import Cta_part from './sec_cta_part';
import Service_part from './sec_service_part';
import About_part from './sec_about_part'
import Our_latest_work from './sec_our_latest_work';
import Footer from './footer'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Banner_part />, document.getElementById('banner_part'));
ReactDOM.render(<Cta_part />, document.getElementById('cta_part'));
ReactDOM.render(<Service_part />, document.getElementById('service_part'));
ReactDOM.render(<About_part />, document.getElementById('about_part'));
ReactDOM.render(<Our_latest_work />, document.getElementById('our_latest_work'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

serviceWorker.unregister();
