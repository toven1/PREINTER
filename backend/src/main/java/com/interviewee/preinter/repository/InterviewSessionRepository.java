package com.interviewee.preinter.repository;

import com.interviewee.preinter.interview.InterviewSession;
import org.springframework.data.repository.CrudRepository;

public interface InterviewSessionRepository extends CrudRepository<InterviewSession, String> {
}
