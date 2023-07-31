package com.casestudy.AddTrainservice.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.casestudy.AddTrainservice.entity.TrainDetails;
import com.casestudy.AddTrainservice.proxy.SearchProxy;

@RestController
@RequestMapping("/admin")
public class AddOperationController {
	
	@Autowired
	private SearchProxy proxy;
	
	
	public AddOperationController(SearchProxy proxy) {
        this.proxy = proxy;
    }
	
	
	@PostMapping("/addtrain")
	public String addTrain1(@RequestBody TrainDetails tdetails)
	{
		String msg = proxy.addTrain(tdetails);
		return null;
	}
	
	@DeleteMapping("/removetrain/{trainnumber}")
	public String deleteTrain(@PathVariable("trainnumber") String trainnumber)
	{
		return proxy.deleteTrain(trainnumber);
		
	}
	
//	@DeleteMapping("/removetrain")
//	public String deleteTrain(@RequestBody int trainnumber)
//	{
//		return proxy.deleteTrain(trainnumber);
//	}

}
