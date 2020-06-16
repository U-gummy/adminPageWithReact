import React, {Component} from 'react';

class RegisterTable extends Component {
    render() {
        return ( 
            <div className="table-area">
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        var submitData = {
                            id : this.props.maxId + 1,
                            title : e.target.title.value,
                            type : e.target.type.value,
                            open : e.target.open.value,
                            push : e.target.push.value,
                            date : "",
                            views : 0,
                            content : e.target.content.value
                        }
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
                                    <div className="radio-box">
                                        <span className="radio">
                                            <input type="radio" id="type-01" name="type" value="전체" defaultChecked></input>
                                            <label htmlFor="type-01">전체</label>
                                        </span>
                                        <span className="radio">
                                            <input type="radio" id="type-02" name="type" value="SHOP"></input>
                                            <label htmlFor="type-02">SHOP</label>
                                        </span>
                                        <span className="radio">
                                            <input type="radio" id="type-03" name="type" value="사용자"></input>
                                            <label htmlFor="type-03">사용자</label>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>제목<span className="required">*</span></th>
                                <td>
                                    <input type="text" name="title" className="w-full"></input>
                                </td>
                            </tr>
                            <tr>
                                <th>내용<span className="required">*</span></th>
                                <td>
                                    <textarea name="content"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <th>공개여부</th>
                                <td>
                                    <div className="radio-box">
                                        <span className="radio">
                                            <input type="radio" id="open-01" name="open" value="비공개" defaultChecked></input>
                                            <label htmlFor="open-01">비공개</label>
                                        </span>
                                        <span className="radio">
                                            <input type="radio" id="open-02" name="open" value="공개"></input>
                                            <label htmlFor="open-02">공개</label>
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>PUSH여부</th>
                                <td>
                                    <div className="radio-box">
                                        <span className="radio">
                                            <input type="radio" id="push-r01" name="push" value="미발송" defaultChecked></input>
                                            <label htmlFor="push-01">미발송</label>
                                        </span>
                                        <span className="radio">
                                            <input type="radio" id="push-02" name="push" value="발송"></input>
                                            <label htmlFor="push-02">발송</label>
                                        </span>
                                    </div>
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
                        <button type="submit" className="btn btn-primary">등록</button>
                    </div>
                </form>
            </div>
        ); 
    }
}

export default RegisterTable;
