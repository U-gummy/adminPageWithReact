import React, {Component} from 'react';
import InputDatePicker from "./InputDatePicker.js";

class SearchTable extends Component {
  

  render() {
    console.log("SearchTable render");
    return ( 
      <div className="table-area">
        <table className="tbl row-type searchSt">
            <colgroup>
                <col width="200px"></col>
                <col></col>
            </colgroup>
            <tbody>
                <tr>
                    <th>등록일</th>
                    <td>
                        <div className="date-picker-box">
                          <InputDatePicker></InputDatePicker>
                          <span className="hyphen">~</span>
                          <InputDatePicker></InputDatePicker>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>검색조건</th>
                    <td>
                        <div className="search-row">
                            <select name="" id="">
                                <option>구분</option>
                                <option>전체</option>
                                <option>사용자</option>
                                <option>SHOP</option>
                            </select>
                            <select name="" id="">
                                <option>PUSH여부</option>
                                <option>O</option>
                                <option>X</option>
                            </select>
                            <select name="" id="">
                                <option>공개여부</option>
                                <option>공개</option>
                                <option>비공개</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>검색어</th>
                    <td>
                        <input type="text"></input>
                        <button type="button" className="btn btn-primary">검색</button>
                        <button type="button" className="btn btn-secondary">초기화</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
}

export default SearchTable;
