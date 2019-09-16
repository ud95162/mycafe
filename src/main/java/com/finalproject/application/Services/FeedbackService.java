package com.finalproject.application.Services;

import com.finalproject.application.Model.Feedback;

import java.util.List;

public interface FeedbackService {

    List<Feedback> findAllFeeds();

    String saveFeeds(Feedback feedback);
}
