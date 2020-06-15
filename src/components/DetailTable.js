import React, {Component} from 'react';

class DetailTable extends Component {

    render() {
        console.log("DetailTable render");
        return ( 
            <div className="table-area">
                <table className="tbl row-type">
                    <colgroup>
                        <col width="150px"></col>
                        <col></col>
                    </colgroup>
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <td>{this.props.detail.id}</td>
                        </tr>
                        <tr>
                            <th>공지구분</th>
                            <td>{this.props.detail.type}</td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>{this.props.detail.title}</td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td> 
                                {this.props.detail.content}
                            </td>
                        </tr>
                        <tr>
                            <th>공개여부</th>
                            <td>{this.props.detail.open}</td>
                        </tr>
                        <tr>
                            <th>PUSH여부</th>
                            <td>{this.props.detail.push}<button type="button" className="btn btn-push">PUSH 발송하기</button></td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{this.props.detail.name} / {this.props.detail.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DetailTable;
