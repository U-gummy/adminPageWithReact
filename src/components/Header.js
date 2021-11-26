import React, {Component} from 'react';
import img_h_logo from '../style/images/common/img_sub_logo.png';

class Header extends Component {
  render() {
    return ( 
    <header>
        <div className="fr">
        <span className="name"><strong>{this.props.name}</strong>님</span>
            <button type="button" className="btn-logout">로그아웃</button>
        </div>
    </header>
  );
}
}

export default Header;
