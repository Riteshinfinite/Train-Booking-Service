package com.casestudy.TicketBookingService.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.casestudy.TicketBookingService.model.TicketBookingRequest;

@Repository
public interface TicketBookingRequestRepository extends JpaRepository<TicketBookingRequest, Integer> {
    // Add any custom methods or queries specific to TicketBookingRequest entity if needed
}
