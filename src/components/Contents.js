import React, {Component} from 'react';
import SearchTable from "./SearchTable.js";
import ListTable from "./ListTable.js";
import DetailTable from "./DetailTable.js";
import RegisterTable from "./RegisterTable.js";

class Contents extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: "list",
      detail_data : {id:1, title:"Call Baeuty 오픈", type : "사용자", push : "O", open: "공개", date: "2020.03.12", views: 1010, content:"공지사항 내용이 출력~~ ", name: "홍길동" },
      data_list: [
        {id:1, title:"Call Baeuty 오픈", type : "사용자", push : "O", open: "공개", date: "2020.03.12", views: 1010, content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:2, title:"유그미 오픈", type : "전체", push : "X", open: "비공개", date: "2020.03.11", views: 10, content:"공지사항 내용이 출력~~ ", name: "유그미"},
        {id:3, title:"Call Baeuty 오픈", type : "SHOP", push : "O", open: "비공개", date: "2020.03.12", views: 1010, content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:4, title:"Call Baeuty 오픈", type : "SHOP", push : "O", open: "비공개", date: "2020.03.12", views: 1010, content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:5, title:"유그미 오픈", type : "사용자", push : "X", open: "공개", date: "2020.03.02", views: 10, content:"공지사항 내용이 출력~~ ", name: "유그미"},
        {id:6, title:"Call Baeuty 오픈", type : "SHOP", push : "O", open: "비공개", date: "2020.03.04", views: 1010, content:"공지사항 내용이 출력~~ ", name: "유그미" },
        {id:7, title:"Call Baeuty 오픈", type : "SHOP", push : "O", open: "공개", date: "2020.03.10", views: 1010, content:"공지사항 내용이 출력~~ ", name: "유그미" },
        {id:8, title:"Call Baeuty 오픈", type : "SHOP", push : "O", open: "비공개", date: "2020.03.12", views: 1010, content:"공지사항 내용이 출력~~ ", name: "유그미" },
      ]
    }
  }
  detailData = function(data_id){
    for (var i in this.state.data_list) {
      if(this.state.data_list[i].id === Number(data_id)) {
        console.log(this.state.data_list[i]);
        return this.state.data_list[i]
      }
    }
  }
  render() {
    var page_type;
    if(this.state.mode == "list") {
      page_type =  
        <ListTable 
        data={this.state.data_list}
        detail = {this.state.detail_data}
        onChangePage = {function(mode, data_id){
        var detaill_data = this.detailData(data_id);
        this.setState({
          mode : mode,
          detail_data : detaill_data
        })

        
      }.bind(this)}
      ></ListTable>
    } else if (this.state.mode == "detail") {
      page_type = 
      <DetailTable
        detail = {this.state.detail_data}
      ></DetailTable>
    } else if (this.state.mode == "register") {
      page_type = 
      <RegisterTable></RegisterTable>
    }
    return ( 
        <div id="contents">
          {/* <SearchTable></SearchTable> */}
          {page_type}
        </div>
    );
  }
}

export default Contents;
