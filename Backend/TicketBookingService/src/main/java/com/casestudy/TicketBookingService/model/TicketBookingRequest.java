package com.casestudy.TicketBookingService.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "ticket_booking_request")
public class TicketBookingRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToMany(mappedBy = "ticketBookingRequest", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Passenger> passengers;
    
    

    private String source;
    private String destination;
    private LocalDate date;
    private String trainNumber;
    private String chosenClass;
    private int AvailableSeats;

    // Constructors, getters, and setters

    public TicketBookingRequest() {
    	passengers = new ArrayList<>();
    }

    public TicketBookingRequest(List<Passenger> passengers, String source, String destination, LocalDate date, String trainNumber, String chosenClass,int AvailableSeats) {
        this.passengers = passengers;
        this.source = source;
        this.destination = destination;
        this.date = date;
        this.trainNumber = trainNumber;
        this.chosenClass = chosenClass;
        this.AvailableSeats=AvailableSeats;
    }

    // Getters and setters

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public List<Passenger> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<Passenger> passengers) {
        this.passengers = passengers;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(String trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getChosenClass() {
        return chosenClass;
    }

    public void setChosenClass(String chosenClass) {
        this.chosenClass = chosenClass;
    }

	public int getAvailableSeats() {
		return AvailableSeats;
	}

	public void setAvailableSeats(int availableSeats) {
		AvailableSeats = availableSeats;
	}
    
    
}
