import React, {Component} from 'react';

class RegisterTable extends Component {

    render() {
        console.log("RegisterTable render");
        return ( 
            <div className="table-area">
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
                                        <input type="radio" name="notice-r" value="전체" defaultChecked></input>
                                        <label>전체</label>
                                    </span>
                                    <span className="radio">
                                        <input type="radio" name="notice-r" value="SHOP"></input>
                                        <label>SHOP</label>
                                    </span>
                                    <span className="radio">
                                        <input type="radio" name="notice-r" value="사용자"></input>
                                        <label>사용자</label>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>제목<span className="required">*</span></th>
                            <td>
                                <input type="text" className="w-full"></input>
                            </td>
                        </tr>
                        <tr>
                            <th>내용<span className="required">*</span></th>
                            <td>
                                <div className="editor-area">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>공개여부</th>
                            <td>
                                <div className="radio-box">
                                    <span className="radio">
                                        <input type="radio" name="public-r" value="비공개" defaultChecked></input>
                                        <label>비공개</label>
                                    </span>
                                    <span className="radio">
                                        <input type="radio" name="public-r" value="공개"></input>
                                        <label>공개</label>
                                    </span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>PUSH여부</th>
                            <td>
                                <div className="radio-box">
                                    <span className="radio">
                                        <input type="radio" name="push-r" value="미발송" defaultChecked></input>
                                        <label>미발송</label>
                                    </span>
                                    <span className="radio">
                                        <input type="radio" name="push-r" value="발송"></input>
                                        <label>발송</label>
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RegisterTable;
