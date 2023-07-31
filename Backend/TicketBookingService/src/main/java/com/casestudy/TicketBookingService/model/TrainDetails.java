package com.casestudy.TicketBookingService.model;
import java.util.Date;

public class TrainDetails {
	private int srno;
	private int trainnumber;
	private String trainname;
	private String source;
	private String destination;
	private String arrTime;
	private String depTime;
	private Date date;
	private int avlSlpNonAcgen;
	private int avlSlNonAcladies;
	private int avlSlNonAcFare;
	private int avlSlAcgen;
	private int avlSLAcLadies;
	private int avlSlAcFare;
	public TrainDetails(int srno, int trainnumber, String trainname, String source, String destination,
			String arrTime, String depTime,Date date, int avlSlpNonAcgen, int avlSlNonAcladies, int avlSlNonAcFare,
			int avlSlAcgen, int avlSLAcLadies, int avlSlAcFare) {
		super();
		this.srno = srno;
		this.trainnumber = trainnumber;
		this.trainname = trainname;
		this.source = source;
		this.destination = destination;
		this.arrTime = arrTime;
		this.depTime = depTime;
		this.date = date;
		this.avlSlpNonAcgen = avlSlpNonAcgen;
		this.avlSlNonAcladies = avlSlNonAcladies;
		this.avlSlNonAcFare = avlSlNonAcFare;
		this.avlSlAcgen = avlSlAcgen;
		this.avlSLAcLadies = avlSLAcLadies;
		this.avlSlAcFare = avlSlAcFare;
	}
	public TrainDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getSrno() {
		return srno;
	}
	public void setSrno(int srno) {
		this.srno = srno;
	}
	public int getTrainnumber() {
		return trainnumber;
	}
	public void setTrainnumber(int trainnumber) {
		this.trainnumber = trainnumber;
	}
	public String getTrainname() {
		return trainname;
	}
	public void setTrainname(String trainname) {
		this.trainname = trainname;
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
	public String getArrTime() {
		return arrTime;
	}
	public void setArrTime(String arrTime) {
		this.arrTime = arrTime;
	}
	public String getDepTime() {
		return depTime;
	}
	public void setDepTime(String depTime) {
		this.depTime = depTime;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getAvlSlpNonAcgen() {
		return avlSlpNonAcgen;
	}
	public void setAvlSlpNonAcgen(int avlSlpNonAcgen) {
		this.avlSlpNonAcgen = avlSlpNonAcgen;
	}
	public int getAvlSlNonAcladies() {
		return avlSlNonAcladies;
	}
	public void setAvlSlNonAcladies(int avlSlNonAcladies) {
		this.avlSlNonAcladies = avlSlNonAcladies;
	}
	public int getAvlSlNonAcFare() {
		return avlSlNonAcFare;
	}
	public void setAvlSlNonAcFare(int avlSlNonAcFare) {
		this.avlSlNonAcFare = avlSlNonAcFare;
	}
	public int getAvlSlAcgen() {
		return avlSlAcgen;
	}
	public void setAvlSlAcgen(int avlSlAcgen) {
		this.avlSlAcgen = avlSlAcgen;
	}
	public int getAvlSLAcLadies() {
		return avlSLAcLadies;
	}
	public void setAvlSLAcLadies(int avlSLAcLadies) {
		this.avlSLAcLadies = avlSLAcLadies;
	}
	public int getAvlSlAcFare() {
		return avlSlAcFare;
	}
	public void setAvlSlAcFare(int avlSlAcFare) {
		this.avlSlAcFare = avlSlAcFare;
	}

}
