package com.SearchService.Controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.SearchService.model.RemoveTicketsRequest;
import com.SearchService.model.TrainDetails;
import com.SearchService.exception.TrainNotFoundException;
import com.SearchService.model.TrainDetails;
import com.SearchService.service.SearchService;

@RestController
public class SearchController {
	
	@Autowired
	private SearchService service;
	
	@PostMapping("/searchtrains")
	public List<TrainDetails> searchTrain(@RequestBody Map<String, Object> traindetails) throws TrainNotFoundException 
	{
		String source = null;
		String dest = null;
	    source = traindetails.get("source").toString();
		dest = traindetails.get("destination").toString();
		String date = traindetails.get("date").toString();
		java.util.Date date1 = null;
		try {
			date1 = new SimpleDateFormat("yyyy-MM-dd").parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}  
		return service.searchTrain(source, dest, date1);
	}
	
	@PostMapping("/admin/addtrain")
	public String addTrain(@RequestBody TrainDetails tdetails)
	{
		return service.addTrain(tdetails);
	}
	
	@GetMapping("/admin/demo")
	public String demotest()
	{
		return "case study";
	}
	
	@DeleteMapping("/admin/removetrain/{trainnumber}")
	public String deleteTrain(@PathVariable("trainnumber") String trainnumber) throws TrainNotFoundException {
		service.deleteTrain(trainnumber);
//		return "TrainDetails deleted successfully.";
		return null;
	}
//	
	@PutMapping("/updateavl")
	public void removebookTickets(@RequestBody RemoveTicketsRequest request) {
	    service.removebookTickets(request.getTrainNumber(), request.getChosenClass(), request.getNoOfBookedTickets());
	}


	

}
