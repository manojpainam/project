package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.model.Problem;

@Repository
public interface ProblemRepo extends JpaRepository<Problem, Integer>{

}
