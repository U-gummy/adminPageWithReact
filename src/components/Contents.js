import React, {Component} from 'react';
import SearchTable from "./SearchTable.js";
import ListTable from "./ListTable.js";
import DetailTable from "./DetailTable.js";
import RegisterTable from "./RegisterTable.js";
import ModifyTable from "./ModifyTable.js";

class Contents extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mode: "list",
      detail_data : {id:0, title:"-", type : "-", push : "-", open: "-", date: "-", content:"-", name: "-" },
      data_max_id : 8,
      data_list: [
        {id:1, title:"list 오픈", type : "사용자", push : "발송", open: "공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:2, title:"유그미 오픈", type : "전체", push : "미발송", open: "비공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "유그미"},
        {id:3, title:"list 오픈", type : "SHOP", push : "발송", open: "비공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:4, title:"list 오픈", type : "SHOP", push : "발송", open: "비공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "홍길동" },
        {id:5, title:"유그미 오픈", type : "사용자", push : "미발송", open: "공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "유그미"},
        {id:6, title:"list 오픈", type : "SHOP", push : "발송", open: "비공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "유그미" },
        {id:7, title:"list 오픈", type : "SHOP", push : "발송", open: "공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "유그미" },
        {id:8, title:"list 오픈", type : "SHOP", push : "발송", open: "비공개", date: "2020.00.00", content:"공지사항 내용이 출력~~ ", name: "유그미" },
      ]
    }
  }
  detailData = function(data_id){
    for (var i in this.state.data_list) {
      if(this.state.data_list[i].id === Number(data_id)) {
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
        onChangePage = {function(mode){
          this.setState({
            mode : mode,
          })
        }.bind(this)}
      ></DetailTable>
    } else if (this.state.mode == "register") {
      page_type = 
      <RegisterTable 
        maxId = {this.state.data_max_id}
        onSubmit={function(mode,_newData){
          var newData = Array.from(this.state.data_list);
          newData.push(_newData);
          this.setState({
            data_max_id : this.state.data_max_id + 1,
            data_list : newData,
            mode : mode
          });
        }.bind(this)}
        onChangePage = {function(mode){
          this.setState({
            mode : mode,
          })
        }.bind(this)}
      ></RegisterTable> 
    } else if (this.state.mode == "modify") {
      page_type = 
      <ModifyTable 
        detailData={this.state.detail_data}
        onChangePage = {function(mode, del_id){
          var newDataList = Array.from(this.state.data_list);
          for(var i in newDataList) {
            if(newDataList[i].id === del_id) {
              newDataList.splice(i,1);
            }
          }
          this.setState({
            mode : mode,
            data_list : newDataList
          })
        }.bind(this)}
        onSubmit={function(mode,_newData){
          var newDataList = Array.from(this.state.data_list);
          for(var i in newDataList) {
            if(newDataList[i].id === _newData.id) {
              newDataList[i] = _newData
            }
          }
          this.setState({
            mode : mode,
            data_list : newDataList
          });
        }.bind(this)}
      ></ModifyTable> 
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
