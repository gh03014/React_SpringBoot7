import React, { Component } from 'react';
import JaehwanBoardService from '../service/JaehwanBoardService';
import { useNavigate as UseNavigate} from 'react-router-dom';


class ListJaehwanBoardComponent extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            boards: []
        }
		
        this.createBoard = this.createBoard.bind(this);
    }

    componentDidMount() {
        JaehwanBoardService.getBoards().then((res) => {
            this.setState({ boards: res.data});
        });
    }

    createBoard() {
        const navigate = this.props.navigate;
        navigate('/create-board/_create');
    }

    readBoard(no) {
        const navigate = this.props.navigate;
        navigate(`/read-board/${no}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Boards List</h2>

				<div className = "row">
                    <button className="btn btn-primary" onClick={this.createBoard}> 글 작성</button>
                </div>

                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>타이틀 </th>
                                <th>작성자 </th>
                                <th>작성일 </th>
                                <th>갱신일 </th>
                                <th>좋아요수</th>
                                <th>조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.boards.map(
                                    board => 
                                    <tr key = {board.no}>
                                        <td> {board.no} </td>
                                        <td> <a onClick = {() => this.readBoard(board.no)}>{board.title} </a></td>
                                        <td> {board.memberNo} </td>
                                        <td> {board.createdTime} </td>
                                        <td> {board.updatedTime} </td>
                                        <td> {board.likes} </td>
                                        <td> {board.counts} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>    
        );
    }
}

//기존의 Class 컴포넌트에서는 Hooks사용할 수 없다.
//기존의 Class 컴포넌트 구조를 유지하면서 Fuction 함수에서 Class구조를 감싸고 재호출하는 방식으로 Hooks를 사용할 수 있다. 
function withHookClassComponent(Component) {
    return function WrappedComponent(props) {
      //const myHookValue = useMyHook();
      const navigate = UseNavigate();
      return <Component {...props} navigate={navigate} />;
    }
}

export default withHookClassComponent(ListJaehwanBoardComponent);