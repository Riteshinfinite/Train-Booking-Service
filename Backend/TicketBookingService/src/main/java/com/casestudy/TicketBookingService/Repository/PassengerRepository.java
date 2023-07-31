package com.casestudy.TicketBookingService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casestudy.TicketBookingService.model.Passenger;
import com.casestudy.TicketBookingService.model.TicketBookingRequest;

import java.util.List;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {
    List<Passenger> findByTicketBookingRequest(TicketBookingRequest ticketBookingRequest);
}