package com.SearchService.service;

import java.sql.Date;
import java.util.Optional;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SearchService.model.TrainDetails;

import com.SearchService.exception.TrainNotFoundException;


import com.SearchService.repository.RailRepo;
@Service
public class SearchService {
	
	@Autowired
	private RailRepo repo;
	
	public List<TrainDetails> searchTrain(String source, String dest, java.util.Date date) throws TrainNotFoundException
	{
		List<TrainDetails> trains = repo.findBySourceAndDestinationAndDate(source, dest, new Date(date.getTime()));
//		System.out.println(new Date(date.getTime()));
//		TrainDetails temp = repo.findById("17699").orElse(null);
//		System.out.println(temp.getDate());
		if (trains.size()!=0)
		{
			return trains;			
		}else {
			throw new TrainNotFoundException("Train Not Found For The Given Information");
		}
//		return null;
	}
	
	public String addTrain(TrainDetails tdetails)
	{
		repo.save(tdetails);
		return "Data added successfully";
	}

	public String deleteTrain(String trainnumber) throws TrainNotFoundException{
		// TODO Auto-generated method stub
		
		repo.deleteById(trainnumber);
//		try {
//			repo.deleteBytrainnumber(trainnumber);
//		}catch(TrainNotFoundException ex) {
//			throw new TrainNotFoundException("Train not found with the entered trainNumber");			
//		}
		return "Train details Removed successfully";
	}

	
	public void removebookTickets(String trainNumber, String chosenClass, int noofbookedtickets) {
		TrainDetails train = repo.findById(trainNumber).orElse(null);
		
	    if (train != null) {
	        // Update the train details based on the chosenClass and noofbookedtickets
	        switch (chosenClass) {
	            case "SlNonAcladies":
	                train.setAvlSlNonAcladies(train.getAvlSlNonAcladies()-noofbookedtickets);
	                break;
	            case "SlpNonAcgen":
	                train.setAvlSlpNonAcgen(train.getAvlSlpNonAcgen()-noofbookedtickets);
	                break;
	            case "SlAcgen":
	                train.setAvlSlAcgen(train.getAvlSlAcgen()-noofbookedtickets);
	                break;
	            case "SLAcLadies":
	                train.setAvlSLAcLadies(train.getAvlSLAcLadies()-noofbookedtickets);
	                break;
	            default:
	                // Handle the case when chosenClass is not one of the expected values
	                break;
	        }

	      // Save the updated TrainDetails back to the repository (database)
	        repo.save(train);
	    }
	}
	
	public void increaseavlcancelTickets(String trainNumber, String chosenClass) {
		TrainDetails train = repo.findById(trainNumber).orElse(null);
	    if (train != null) {
	        // Update the train details based on the chosenClass and noofbookedtickets
	        switch (chosenClass) {
	            case "NonAcladies":
	                train.setAvlSlNonAcladies(train.getAvlSlNonAcladies()+1);
	                break;
	            case "NonAcgen":
	                train.setAvlSlpNonAcgen(train.getAvlSlpNonAcgen()+1);
	                break;
	            case "Acgen":
	                train.setAvlSlAcgen(train.getAvlSlAcgen()+1);
	                break;
	            case "AcLadies":
	                train.setAvlSLAcLadies(train.getAvlSLAcLadies()+1);
	                break;
	            default:
	                // Handle the case when chosenClass is not one of the expected values
	                break;
	        }

	        // Save the updated TrainDetails back to the repository (database)
	        repo.save(train);
	    }
	}
}
