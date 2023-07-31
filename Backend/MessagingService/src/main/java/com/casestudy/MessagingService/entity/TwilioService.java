package com.casestudy.MessagingService.entity;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class TwilioService {
    
    @Value("${twilio.accountSid}")
    private String accountSid;
    
    @Value("${twilio.authToken}")
    private String authToken;
    
    @Value("${twilio.phoneNumber}")
    private String phoneNumber;
    
    public void sendSms(String toPhoneNumber, String messageBody) {
        com.twilio.Twilio.init(accountSid, authToken);
        
        Message message = Message.creator(
                new PhoneNumber(toPhoneNumber),
                new PhoneNumber(phoneNumber),
                messageBody
        ).create();
        
        System.out.println("SMS sent: " + message.getSid());
    }
}
