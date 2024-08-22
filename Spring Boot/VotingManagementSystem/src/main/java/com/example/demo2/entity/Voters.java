package com.example.demo2.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="Voters")
public class Voters {
	
	@Id
	@Column(name="votersId")
	private Integer voters_ID;
	
	
	@Column(name="password")
	private String password;
	
	
	@Column(name="firstName")
	private String first_name;
	
	@Column(name="lastName")
	private String last_name;
	
	
	@Column(name="voter_photo")
	private String voter_photo;
	
	@Column(name="username")
	private String username;
	
//	@OneToMany(mappedBy = "voterss")  //(o-m)  
//	private List<Votes> votess;
	
	@OneToMany(targetEntity=Votes.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "votersId", referencedColumnName = "votersId", nullable = true)
	private Set<Votes> votess;

	
	public Voters() {
		// TODO Auto-generated constructor stub
	}

	
	
	public Voters(Integer voters_ID, String password, String first_name, String last_name, String voter_photo,
			String voters,String username) {
		this.voters_ID = voters_ID;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.voter_photo = voter_photo;
		this.username = username;
	}



	public Integer getVoters_ID() {
		return voters_ID;
	}

	public void setVoters_ID(Integer voters_ID) {
		this.voters_ID = voters_ID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstname() {
		return first_name;
	}

	public void setFirstname(String firstname) {
		this.first_name = firstname;
	}

	public String getLastname() {
		return last_name;
	}

	public void setLastname(String lastname) {
		this.last_name = lastname;
	}

	public String getVoter_photo() {
		return voter_photo;
	}

	public void setVoter_photo(String voter_photo) {
		this.voter_photo = voter_photo;
	}
	
	

	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	@Override
	public String toString() {
		return "Voters [voters_ID=" + voters_ID + ", password=" + password + ", first_name=" + first_name
				+ ", last_name=" + last_name + ", voter_photo=" + voter_photo + "]";
	}



	
	
	
	
	
	
}
