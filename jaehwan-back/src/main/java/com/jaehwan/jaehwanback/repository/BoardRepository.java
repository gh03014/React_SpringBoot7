package com.jaehwan.jaehwanback.repository;

import com.jaehwan.jaehwanback.model.Board;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Integer> {

}
