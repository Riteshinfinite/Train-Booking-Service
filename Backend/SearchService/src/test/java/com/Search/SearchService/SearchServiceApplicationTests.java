package com.Search.SearchService;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

//import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.SearchService.SearchServiceApplication;
import com.SearchService.Controller.SearchController;
import com.SearchService.model.TrainDetails;
import com.SearchService.exception.TrainNotFoundException;

@SpringBootTest(classes = SearchServiceApplication.class)
class SearchServiceApplicationTests {

//	@Test
//	void contextLoads() {
//	}
	
	@MockBean
   private SearchController controller;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.openMocks(this);
	}
	
	@Test
    void testsearchTrain() throws TrainNotFoundException, ParseException {

        Map<String, Object> details = Map.of(
            "source", "Nanded",
            "destination", "Pune",
            "date", "2023-06-15"
        );
        List<TrainDetails> expectedTrains = new ArrayList<>();
	    Date date2 = (Date) new SimpleDateFormat("yyyy-MM-dd").parse("2023-06-15");
	    
	    TrainDetails t1 = new TrainDetails(152, "11302", "Pune-nanded", "Nanded", "Pune", "11:00", "20:15",date2, 300, 300, 300,100,100,100);
	    
	    expectedTrains.add(t1);
	    when(controller.searchTrain(details)).thenReturn(expectedTrains);

        List<TrainDetails> actualTrains = controller.searchTrain(details);

        assertEquals(expectedTrains, actualTrains);
    }

}

