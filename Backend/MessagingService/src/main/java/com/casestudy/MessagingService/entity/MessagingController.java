package com.casestudy.MessagingService.entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/smssending")
public class MessagingController {

    private final TwilioService twilioService;

    @Autowired
    public MessagingController(TwilioService twilioService) {
        this.twilioService = twilioService;
    }
    
    
    @PostMapping("/sms")
    public void sendSMS(@RequestBody SMSSendingRequest smsSendingRequest) {
        // Process the request and retrieve the necessary ticket details
        String ticketDetails = smsSendingRequest.getTicketDetails();

        // Send SMS using Twilio
        twilioService.sendSms(smsSendingRequest.getPhoneNumber(), "Ticket details: " + ticketDetails);
    }
}
