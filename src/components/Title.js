import React, {Component} from 'react';

class Title extends Component {
  render() {

    return ( 
      <div className="tit-box">
        {/* <div className="fr">
            <ul className="location-list">
                <li>
                    <a href="javascript:void(0)" className="home">처음으로</a>
                </li>
                <li>
                    <a href="javascript:void(0)">콜뷰티APP관리</a>
                </li>
                <li>
                    <a href="javascript:void(0)" className="active">시스템공지</a>
                </li>
            </ul>
        </div> */}
        <h3>
          {this.props.currentMenu.sub_title}
        </h3>
    </div>
  );
}
}

export default Title;
