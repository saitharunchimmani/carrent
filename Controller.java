package com.example.demo.carrental.Controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.carrental.models.model1;
import com.example.demo.carrental.repositories.Repo1;
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/connect")
public class Controller {
	@Autowired
	Repo1 repo;
	
	@PostMapping("/sign")
	public String mthd(@RequestBody model1 d)
	{
	String user=d.getEmail();

	model1 m=repo.findByEmail(user);
	if(m==null)
	{
	repo.save(d);
	return "added";
	}
	else
	{
	return "user already exist";
	}
	}
	
	//login
	@PostMapping("/login/{email}/{password}")
	public String login(@PathVariable String
	email,@PathVariable String password)
	{
	model1 ll=repo.findByEmail(email);
	if(ll == null)
	{
	return "Invalid Email";
	}
	else {

	if(ll.getPassword().equals(password))
	{
	return "Success";
	}
	else
	{
	return "Invalid Password";
	}

	}

	}
}