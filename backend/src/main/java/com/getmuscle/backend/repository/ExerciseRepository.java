package com.getmuscle.backend.repository;

import com.getmuscle.backend.entity.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long>{
}
