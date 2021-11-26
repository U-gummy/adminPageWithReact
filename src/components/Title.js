import React, {Component} from 'react';

class Title extends Component {
  render() {

    return ( 
      <div className="tit-box">
        <h3>
          {this.props.currentMenu.sub_title}
        </h3>
    </div>
  );
}
}

export default Title;
