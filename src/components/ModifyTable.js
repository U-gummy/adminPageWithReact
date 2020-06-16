import React, {Component} from 'react';
import Radio from "./Radio.js";

class ModifyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.detailData.title,
            content: this.props.detailData.content
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }
    inputFormHandler(e) {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        var detailData = this.props.detailData;
        console.log('detailData: ', detailData);
        return ( 
            <div className="table-area">
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        var submitData = {
                            id : detailData.id,
                            title : this.state.title,
                            type : e.target.type.value,
                            open : e.target.open.value,
                            push : e.target.push.value,
                            date : "2020.00.00",
                            views : 0,
                            content : this.state.content
                        }
                        console.log('submitData: ', submitData);
                        this.props.onSubmit("list",submitData);
                    }.bind(this)}
                >
                    <table className="tbl row-type">
                        <colgroup>
                            <col width="150px"></col>
                            <col></col>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>공지구분<span className="required">*</span></th>
                                <td>
                                <Radio 
                                    data = {detailData.type}
                                    radioVal={["전체", "SHOP", "사용자"]}
                                    radioName = "type"
                                ></Radio>
                                </td>
                            </tr>
                            <tr>
                                <th>제목<span className="required">*</span></th>
                                <td>
                                    <input type="text" name="title" className="w-full" value={this.state.title} 
                                        onChange={this.inputFormHandler}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <th>내용<span className="required">*</span></th>
                                <td>
                                    <textarea name="content" value={this.state.content} onChange={this.inputFormHandler}></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>공개여부</th>
                                <td>
                                <Radio 
                                    data = {detailData.open}
                                    radioVal={["공개", "비공개"]}
                                    radioName = "open"
                                ></Radio>
                                </td>
                            </tr>
                            <tr>
                                <th>PUSH여부</th>
                                <td>
                                <Radio 
                                    data = {detailData.push}
                                    radioVal={["발송", "미발송"]}
                                    radioName = "push"
                                ></Radio>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-area">
                        <button type="button" className="btn btn-secondary"
                            onClick = {function(e){
                                e.preventDefault();
                                this.props.onChangePage("list");
                            }.bind(this)}
                        >취소</button>
                        <button type="button" className="btn btn-danger"
                            onClick = {function(e){
                                e.preventDefault();
                                this.props.onChangePage("list",detailData.id);
                            }.bind(this)}
                        >삭제</button>
                        <button type="submit" className="btn btn-success">수정완료</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ModifyTable;
