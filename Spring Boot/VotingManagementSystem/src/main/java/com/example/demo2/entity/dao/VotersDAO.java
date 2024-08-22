package com.example.demo2.entity.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.demo2.entity.Voters;

@RepositoryRestResource(path="Voters")
@CrossOrigin("http://localhost:4200")
public interface VotersDAO extends JpaRepository<Voters, Integer> {



}
