package com.example.demo2.entity.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo2.entity.Votes;

@RepositoryRestResource(path="Votes")
@CrossOrigin("http://localhost:4200")
public interface VotesDAO extends JpaRepository<Votes, Integer> {
//	Page<Votes> findByVoters_Id(@RequestParam("voters_ID") Integer voters_ID,Pageable pageable);
//	public List<Votes> findByCandidates_Id(Integer candidate_id);
//	Page<Votes> findByVoters(@RequestParam("votersId") Integer voters_ID,Pageable pageable);
	
}
