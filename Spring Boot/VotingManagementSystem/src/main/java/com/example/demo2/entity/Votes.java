package com.example.demo2.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="votes")
public class Votes {
	
	
	@Column(name="votersId")
	private Integer voters_ID;

	@Column(name="candidateId")
	private Integer candidate_id;
	
	@Id
	@Column(name="sno")
	private Integer sno;
	
	@Column(name="max_votes")
	private Integer max_votes;
	
//	@ManyToOne(targetEntity = Candidates.class,fetch = FetchType.EAGER) //(m-o)
//	@JoinColumn(name="candidateId",insertable = false, updatable = false)
//	private Candidates candidatess;
//	
//	
//	@ManyToOne(targetEntity = Voters.class,fetch = FetchType.EAGER) //(m-o)
//	@JoinColumn(name="votersId",insertable = false, updatable = false)
//	private Voters voterss;

	public Votes() {
		// TODO Auto-generated constructor stub
	}

	

	public Votes(Integer voters_ID, Integer candidate_id, Integer sno, Integer max_votes) {
		this.voters_ID = voters_ID;
		this.candidate_id = candidate_id;
		this.sno = sno;
		this.max_votes = max_votes;
	}



	public Integer getVoters_ID() {
		return voters_ID;
	}



	public void setVoters_ID(Integer voters_ID) {
		this.voters_ID = voters_ID;
	}



	public Integer getCandidate_id() {
		return candidate_id;
	}



	public void setCandidate_id(Integer candidate_id) {
		this.candidate_id = candidate_id;
	}



	public Integer getSno() {
		return sno;
	}



	public void setSno(Integer sno) {
		this.sno = sno;
	}



	public Integer getMax_votes() {
		return max_votes;
	}



	public void setMax_votes(Integer max_votes) {
		this.max_votes = max_votes;
	}



	@Override
	public String toString() {
		return "Votes [voters_ID=" + voters_ID + ", candidate_id=" + candidate_id + ", sno=" + sno + ", max_votes="
				+ max_votes + ", voterss=" + ", candidatess="  + "]";
	}



	




	
	
	
	
	
}
