package com.rabo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rabo.entity.User;
import com.rabo.repository.UserRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

@Autowired
private UserRepository repo;

@PostMapping("/register")
public User register(
@RequestBody User user
){
return repo.save(user);
}

@GetMapping("/users")
public Object users(){
return repo.findAll();
}
}