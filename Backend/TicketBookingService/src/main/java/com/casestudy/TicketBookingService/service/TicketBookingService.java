package com.casestudy.TicketBookingService.service;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.casestudy.TicketBookingService.Repository.PassengerRepository;
import com.casestudy.TicketBookingService.Repository.TicketBookingRequestRepository;
import com.casestudy.TicketBookingService.model.Passenger;
import com.casestudy.TicketBookingService.model.RemoveTicketsRequest;
import com.casestudy.TicketBookingService.model.TicketBookingRequest;
import com.casestudy.TicketBookingService.model.TrainDetails;
import com.casestudy.TicketBookingService.proxy.RemoveBookedTickets;

@Service
public class TicketBookingService {
	
	@Autowired(required=false)
	private  PassengerRepository passengerRepository;
	@Autowired
    private  TicketBookingRequestRepository ticketBookingRequestRepository;
	
	@Autowired
	private RemoveBookedTickets proxy;
	
	
//	 private int getAvailableSeats(String trainNumber, String chosenClass) {
//		 return 100; // Assuming 100 seats are available for any train and class
//     }

	private int seatCounter=1;
	String prefix;
	private String generateSeatNumber(String trainNumber,String chosenClass) {
//		 return "S01"; // Assuming a static seat number for simplicity
		 if (chosenClass.equals("SlpNonAcgen") || chosenClass.equals("SlNonAcladies")) {
			 prefix = "S"; // Example prefix for the specified class
	        } else if (chosenClass.equals("SlAcgen") || chosenClass.equals("SLAcLadies")) {
	        	prefix = "B"; // Example prefix for the specified class
	        } else {
	        	prefix = "Unknown"; // If the chosen class is not recognized, return "Unknown"
	        }
	        String seatNumber = prefix + seatCounter;
	        seatCounter++;

	        return seatNumber;
	 }

	 
 
	int noofbookedtickets =0;
	public void bookTickets(TicketBookingRequest request) throws Exception {
		// TODO Auto-generated method stub
		
		int availableSeats = request.getAvailableSeats();//getAvailableSeats(request.getTrainNumber(), request.getChosenClass());
        int numberOfTickets = request.getPassengers().size();
       

        if (numberOfTickets < availableSeats) {
            throw new Exception("Not enough available seats for the chosen class.");
        }
        
     // Generate seat numbers and save the tickets
        TicketBookingRequest ticketBookingRequest = new TicketBookingRequest();
        ticketBookingRequest.setSource(request.getSource());
        ticketBookingRequest.setDestination(request.getDestination());
        ticketBookingRequest.setDate(request.getDate());
        ticketBookingRequest.setTrainNumber(request.getTrainNumber());
        ticketBookingRequest.setChosenClass(request.getChosenClass());
        
//        TrainDetails train1 = new TrainDetails();
//        train1 = repo.

        for (Passenger passenger : request.getPassengers()) {
            String seatNumber = generateSeatNumber(request.getTrainNumber(),request.getChosenClass());

            passenger.setSeatNumber(seatNumber);
            passenger.setTicketBookingRequest(ticketBookingRequest);
            ticketBookingRequest.getPassengers().add(passenger);
        }
        
        noofbookedtickets = availableSeats-numberOfTickets;
        

        ticketBookingRequestRepository.save(ticketBookingRequest);
        RemoveTicketsRequest request1 = new RemoveTicketsRequest();
        request1.setChosenClass(request.getChosenClass());
        request1.setNoOfBookedTickets(numberOfTickets);
        request1.setTrainNumber(request.getTrainNumber());
        proxy.removebookTickets(request1);
        
        
	}
		
	
	public void cancelTicket(Integer passengerId) throws Exception {
        Optional<Passenger> optionalPassenger = passengerRepository.findById(passengerId);

        if (optionalPassenger.isPresent()) {
            Passenger passenger = optionalPassenger.get();
            TicketBookingRequest ticketBookingRequest = passenger.getTicketBookingRequest();

            // Delete passenger from Passenger table
            passengerRepository.deleteById(passengerId);
//            proxy.increaseavlcancelTickets(String trainNumber, String chosenClass)

            // Check if there are more passengers associated with the same TicketBookingRequest
            List<Passenger> remainingPassengers = passengerRepository.findByTicketBookingRequest(ticketBookingRequest);

            // If no more passengers, delete the TicketBookingRequest as well
            if (remainingPassengers.isEmpty()) {
                ticketBookingRequestRepository.delete(ticketBookingRequest);
            }
        } else {
            throw new Exception("Passenger not found with ID: " + passengerId);
        }
    }


}
