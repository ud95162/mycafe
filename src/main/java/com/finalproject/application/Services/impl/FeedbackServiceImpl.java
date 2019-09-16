package com.finalproject.application.Services.impl;

import com.finalproject.application.Model.Feedback;
import com.finalproject.application.Repository.FeedbackRepository;
import com.finalproject.application.Services.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImpl implements FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;


    @Override
    public List<Feedback> findAllFeeds() {
        List<Feedback> allfeeds = feedbackRepository.findAll();
        return allfeeds;
    }

    @Override
    public String saveFeeds(Feedback feedback) {
        feedbackRepository.save(feedback);
        return "data saved";
    }

}
