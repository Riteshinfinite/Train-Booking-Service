package com.casestudy.AddTrainservice.proxy;
//package com.casestudy.RemovingBookTickets.proxy;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.casestudy.AddTrainservice.entity.TrainDetails;

@FeignClient(name="Search-service")
@Service
public interface SearchProxy {
	
	@PostMapping("/admin/addtrain")
	public String addTrain(@RequestBody  TrainDetails tdetails);
	
	@DeleteMapping("/removetrain/{trainnumber}")
	public String deleteTrain(@PathVariable("trainnumber") String trainnumber);
//	
//	@DeleteMapping("/removetrain")
//	public String deleteTrain(@RequestBody int id);
//	
//	@PutMapping("updatetrain")
//	public String updateTrain(@RequestBody Train train);

}











































//
