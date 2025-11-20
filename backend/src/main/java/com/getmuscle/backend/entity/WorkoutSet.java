package com.getmuscle.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class WorkoutSet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer weight;
    private Integer reps;
    private Integer orderIndex;

    @ManyToOne
    @JoinColumn(name = "session_id")
    private WorkoutSession workoutSession;

    @ManyToOne
    @JoinColumn(name = "exercise_id")
    private Exercise exercise;

}
