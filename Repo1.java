package com.example.demo.carrental.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.carrental.models.model1;
public interface Repo1 extends JpaRepository<model1,Integer>{

	model1 findByEmail(String user);

	
	
	
}