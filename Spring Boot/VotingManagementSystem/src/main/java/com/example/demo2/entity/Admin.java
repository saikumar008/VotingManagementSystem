package com.example.demo2.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class Admin {
	@Id
	@Column(name="id")
	private Integer id;
	
	
	@Column(name="password")
	private String password;
	
	@Column(name="firstname")
	private String firstname;
	
	@Column(name="lastname")
	private String lastname;
	
	
	@Column(name="photo")
	private String photo;

	@Column(name="username")
	private String username;


	public Admin() {
		// TODO Auto-generated constructor stub
	}


	public Admin(Integer id, String password, String firstname, String lastname, String photo,String username) {
		this.id = id;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.photo = photo;
		this.username = username;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public String getPhoto() {
		return photo;
	}


	public void setPhoto(String photo) {
		this.photo = photo;
	}
	
	


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	@Override
	public String toString() {
		return "Admin [id=" + id + ", password=" + password + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", photo=" + photo + "]";
	}
	
	
	
	
}
