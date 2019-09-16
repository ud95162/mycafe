package com.finalproject.application.Controller;

import com.finalproject.application.Model.Feedback;
import com.finalproject.application.Services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/feed")
@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FeedbackController {

    @Autowired
    private FeedbackService feedbackService;


    @GetMapping("/com")
    public List<Feedback> allfeeds(){
        return feedbackService.findAllFeeds();
    }

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @PostMapping(value = "/add")
    public String addFeeds(@RequestBody Feedback feedback){
       return feedbackService.saveFeeds(feedback);

    }

}
