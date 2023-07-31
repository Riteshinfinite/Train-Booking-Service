package com.casestudy.TicketBookingService.model;
public class RemoveTicketsRequest {
    private String trainNumber;
    private String chosenClass;
    private int noOfBookedTickets;
    

    public RemoveTicketsRequest() {
        // Default no-argument constructor
    }

    
	public RemoveTicketsRequest(String trainNumber, String chosenClass, int noOfBookedTickets) {
		super();
		this.trainNumber = trainNumber;
		this.chosenClass = chosenClass;
		this.noOfBookedTickets = noOfBookedTickets;
	}


	@Override
	public String toString() {
		return "RemoveTicketsRequest [trainNumber=" + trainNumber + ", chosenClass=" + chosenClass
				+ ", noOfBookedTickets=" + noOfBookedTickets + "]";
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


	public int getNoOfBookedTickets() {
		return noOfBookedTickets;
	}


	public void setNoOfBookedTickets(int noOfBookedTickets) {
		this.noOfBookedTickets = noOfBookedTickets;
	}

    // Constructors, getters, and setters
}
