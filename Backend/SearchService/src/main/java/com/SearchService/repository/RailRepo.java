package com.SearchService.repository;

import java.sql.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.SearchService.model.TrainDetails;

@Repository
public interface RailRepo extends JpaRepository<TrainDetails,String> {
	
	List<TrainDetails> findBySourceAndDestinationAndDate(String source, String destination, java.util.Date date);

}
