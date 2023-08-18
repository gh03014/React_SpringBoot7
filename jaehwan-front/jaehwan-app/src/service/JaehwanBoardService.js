import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/board"; 

class JaehwanBoardService {

    //게시판 목록 출력
    getBoards() {
        console.log("데이터=", axios.get(BOARD_API_BASE_URL));
        return axios.get(BOARD_API_BASE_URL);
    }

    //글 작성하기
    createBoard(board) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    //글 상세보기
    getOneBoard(no) {
        return axios.get(BOARD_API_BASE_URL + "/" + no);
    }

    //글 수정하기
    updateBoard(no, board) {
        return axios.put(BOARD_API_BASE_URL + "/" + no, board);
    }
}

const JaehwanBoardServiceExport = new JaehwanBoardService();

export default JaehwanBoardServiceExport;