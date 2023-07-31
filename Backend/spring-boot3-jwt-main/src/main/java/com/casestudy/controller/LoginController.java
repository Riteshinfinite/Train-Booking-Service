package com.casestudy.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.dto.AuthRequest;
import com.casestudy.entity.UserInfo;
import com.casestudy.repository.UserInfoRepository;

@RestController
@RequestMapping("/login")
public class LoginController {

	 @Autowired
	    private UserInfoRepository repo;
	
	 @PostMapping("/redirect")
	 public ResponseEntity<?> findRoles(@RequestBody AuthRequest authRequest) {
	     String requestedUsername = authRequest.getUsername();

	     List<UserInfo> userList = repo.findAll();
	     Optional<UserInfo> matchingUser = userList.stream()
	             .filter(userInfo -> userInfo.getName().equals(requestedUsername))
	             .findFirst();

	     if (matchingUser.isPresent()) {
	         UserInfo userInfo = matchingUser.get();
	         String roles = userInfo.getRoles(); 
	         return ResponseEntity.ok(roles);
	     } else {
	         String errorMessage = "User with username " + requestedUsername + " not found.";
	         return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorMessage);
	     }
	 }


	
	
	

   
}
