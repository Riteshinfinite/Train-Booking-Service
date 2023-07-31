package com.casestudy.TicketBookingService.model;

public class CancelTicketRequest {
	private Integer passengerId;

    // Constructors, getters, and setters

    public CancelTicketRequest() {
    }

    public CancelTicketRequest(Integer passengerId) {
        this.passengerId = passengerId;
    }

    public Integer getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Integer passengerId) {
        this.passengerId = passengerId;
    }

}
