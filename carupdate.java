package com.example.demo.carrental.Controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.carrental.models.updatecar;

import com.example.demo.carrental.repositories.carrepo;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/carrental")
public class carupdate {
	@Autowired
	carrepo repo;

	@GetMapping("/get")
	List<updatecar> getdata(){
	return repo.findAll();
	}
	//POST

	@PostMapping("/post")
	public String meth(@RequestBody updatecar d)

	{
	repo.save(d);
	return "inserted";
	}

	// DELETE SPECIFIC DATA THROUGH ID
	@DeleteMapping("/delete/{id}")
	public String deletedata(@PathVariable updatecar id)
	{
		repo.delete(id);

	    return "Deleted";
	 }

	//PUT

	@PutMapping("/put/{carname}")
	public String editdata
	(@PathVariable String carname,@RequestBody updatecar da)
	{
	updatecar m=(updatecar) repo.findById(carname).get();
	if(m!=null) {

	m.setCarname(da.getCarname());
	m.setRent(da.getRent());
	m.setPhonenumber(da.getPhonenumber());
	m.setUsername(da.getUsername());
	repo.save(m);
	return "update";
	}
	else {

	return "update";

	}
	}
}
