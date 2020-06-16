import React, {Component} from 'react';
import './App.css';
import './style/css/common.css';
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Title from "./components/Title.js";
import Contents from "./components/Contents.js";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: "유그미",
      title : "콜뷰티",
      current_menu : {id:11, sub_title:"공지사항관리"},
      content_list: [
        { 
          id:1, 
          title:"콜뷰티App관리",
          sub_content:[
            {id:11, sub_title:"공지사항관리"},
            {id:12, sub_title:"시스템공지관리"},
            {id:13, sub_title:"FAQ관리"},
            {id:14, sub_title:"약관관리"},
            {id:15, sub_title:"APP버전관리"}
          ]
        },
        {
          id:2, 
          title:"매칭관리",
          sub_content:[
            {id:21, sub_title:"매칭관리"},
          ]
        },
        {
          id:3, 
          title:"회원관리",
          sub_content:[
            {id:31, sub_title:"회원관리"},
          ]
        },
        {
          id:4, 
          title:"관리자관리",
          sub_content:[
            {id:41, sub_title:"관리자관리"},
          ]
        },
      ]
    }
  }
   getMenuInfo = function(id) {
    for(var i in this.state.content_list) {
      for(var j in this.state.content_list[i].sub_content) {
        if(this.state.content_list[i].sub_content[j].id === Number(id) ){
          return this.state.content_list[i].sub_content[j];
        }
      }
   }
  }
  render() {
    return ( 
      <div className="App">
        <Header name={this.state.name}></Header>
        <Nav 
          data={this.state.content_list}
          currentMenu = {this.state.current_menu}
          onSelected={function(id){
            var current = this.getMenuInfo(id);
            console.log('current: ', current);
            this.setState ({
              current_menu : current
            })

          }.bind(this)}
        ></Nav>
        <Title currentMenu={this.state.current_menu}></Title>
        <Contents></Contents>
      </div>
    );
  }
}

export default App;
