package com.casestudy.TicketBookingService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.TicketBookingService.model.CancelTicketRequest;
import com.casestudy.TicketBookingService.model.TicketBookingRequest;
import com.casestudy.TicketBookingService.proxy.RemoveBookedTickets;
import com.casestudy.TicketBookingService.service.TicketBookingService;

@RestController
@RequestMapping("/ticket")
public class TicketBookingController {
	
	@Autowired 
	RemoveBookedTickets proxy;
	
	@GetMapping("/demo")
	public String demotest()
	{
		return "case study";
	}
	@Autowired
	private  TicketBookingService ticketBookingService;

	
	@PostMapping("/book")
	public String bookTickets(@RequestBody TicketBookingRequest request) {
		try {
			ticketBookingService.bookTickets(request);
			return "Tickets booked successfully!";
		} catch (Exception e) {
			return "Failed to book tickets: " + e.getMessage();
		}
	}
	
	@DeleteMapping("/cancel")
    public ResponseEntity<String> cancelTicket(@RequestBody CancelTicketRequest cancelRequest) {
        try {
            ticketBookingService.cancelTicket(cancelRequest.getPassengerId());
            return ResponseEntity.ok("Ticket cancelled successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to cancel ticket: " + e.getMessage());
        }
    }


}
