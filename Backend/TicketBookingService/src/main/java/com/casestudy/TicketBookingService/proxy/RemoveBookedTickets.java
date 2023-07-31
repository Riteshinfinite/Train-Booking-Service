package com.casestudy.TicketBookingService.proxy;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.casestudy.TicketBookingService.model.RemoveTicketsRequest;
import com.casestudy.TicketBookingService.model.TicketBookingRequest;
import com.casestudy.TicketBookingService.model.TrainDetails;

@FeignClient(name="Search-service")
@Service
public interface RemoveBookedTickets {
	
	@PutMapping("/updateavl")
	public void removebookTickets(@RequestBody RemoveTicketsRequest request);
	

}


