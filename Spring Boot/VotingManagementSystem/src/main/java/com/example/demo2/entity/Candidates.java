package com.example.demo2.entity;



import java.util.Arrays;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name="Candidates")
public class Candidates {
	
	

	@Id
	@Column(name="candidateId")
	private Integer candidate_id;
	
	
	@Column(name="firstName")
	private String first_name;
	
	@Column(name="lastName")
	private String last_name;
	
	
	@Column(name="candidate_photo")
	private String candidate_photo;
	
	@Column(name="party_photo")
	private String party_photo;
	
	@Column(name="position_name")
	@Enumerated(EnumType.STRING)
	private PositionName position_name;
	
//	@OneToMany(mappedBy = "candidatess")  //(o-m)  
//	private List<Votes> votess;
	
	@OneToMany(targetEntity=Votes.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "candidateId", referencedColumnName = "candidateId", nullable = true)
	private Set<Votes> votess;

	
	public Candidates() {
		// TODO Auto-generated constructor stub
	}


	public Candidates(Integer candidate_id, String first_name, String last_name, String candidate_photo,
			String party_photo, PositionName position_name) {
		super();
		this.candidate_id = candidate_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.candidate_photo = candidate_photo;
		this.party_photo = party_photo;
		this.position_name = position_name;
	}


	public Integer getCandidate_id() {
		return candidate_id;
	}


	public void setCandidate_id(Integer candidate_id) {
		this.candidate_id = candidate_id;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getCandidate_photo() {
		return candidate_photo;
	}


	public void setCandidate_photo(String candidate_photo) {
		this.candidate_photo = candidate_photo;
	}


	public String getParty_photo() {
		return party_photo;
	}


	public void setParty_photo(String party_photo) {
		this.party_photo = party_photo;
	}


	public PositionName getPosition_name() {
		return position_name;
	}


	public void setPosition_name(PositionName position_name) {
		this.position_name = position_name;
	}


	@Override
	public String toString() {
		return "Candidates [candidate_id=" + candidate_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", candidate_photo=" + candidate_photo + ", party_photo=" + party_photo + ", position_name="
				+ position_name + ", votess=" + votess + "]";
	}


	
	



	



	

	
	
	
}
