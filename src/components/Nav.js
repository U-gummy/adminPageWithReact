import React, {Component} from 'react';

class Nav extends Component {

  render() {
    var data = this.props.data;
    var menuList = [];
    for(var i in data) {
      var subMenuList = [];
      menuList.push(
        <li key={data[i].id} className="active">
          <strong>{data[i].title}</strong>
          <ul>
            {subMenuList}
          </ul>
        </li>
      )
      for(var j in data[i].sub_content) {
        var _class = "";
        if(this.props.currentMenu.id === data[i].sub_content[j].id) {
          _class="active"
        }
        subMenuList.push(
        <li key={data[i].sub_content[j].id} className={_class}>
          <a 
            href="/"
            id = {data[i].sub_content[j].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onSelected(e.target.getAttribute("id"));
            }.bind(this)}
          >{data[i].sub_content[j].sub_title}</a>
        </li>
        )
      }
    }
    return ( 
    <nav className="left-navi">
        <ul className="lst">
          {menuList}
        </ul>
    </nav>
  );
}
}

export default Nav;
