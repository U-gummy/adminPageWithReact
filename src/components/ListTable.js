import React, {Component} from 'react';

class ListTable extends Component {

    render() {
        console.log("ListTable render");

        var data = this.props.data;
        
        var tbodyList = [];
        if(data.length) {
            for (var i in data) {
                tbodyList.push(
                    <tr key={data[i].id}>
                        <td>{data[i].id}</td>
                        <td className="align-l">
                            <a 
                            href="/"
                            data-id = {data[i].id}
                            onClick={function(e){  
                                e.preventDefault();
                                this.props.onChangePage("detail",e.target.getAttribute("data-id"));
                            }.bind(this)}
                            >
                                {data[i].title}
                            </a>
                        </td>
                        <td>{data[i].type}</td>
                        <td>{data[i].push}</td>
                        <td>{data[i].open}</td>
                        <td>{data[i].date}</td>
                        <td>{data[i].views}</td>
                    </tr>
                );
            }
        } else {
            tbodyList.push(
                <tr key = "">
                    <td colSpan="7" className="no-data">등록된 데이터가 없습니다.</td>
                </tr>
            )
        }
        return ( 
            <div className="table-area">
                <table className="tbl">
                    <colgroup>
                        <col width="70px;"></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                        <col></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>구분</th>
                            <th>PUSH여부</th>
                            <th>공개여부</th>
                            <th>등록일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tbodyList}
                    </tbody>
                </table>
                <div className="btn-area">
                    <button 
                        type="button" 
                        className="btn btn-primary fr"
                        data-id = {data[i].id}
                            onClick={function(e){  
                                e.preventDefault();
                                this.props.onChangePage("register");
                            }.bind(this)}
                    >등록</button>
                </div>
            </div>
        );
    }
}

export default ListTable;
