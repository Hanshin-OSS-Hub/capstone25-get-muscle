package com.getmuscle.backend.repository;

import com.getmuscle.backend.entity.WorkoutSession;
import com.getmuscle.backend.entity.WorkoutSet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutSetRepository extends JpaRepository<WorkoutSession, Long> {

}
