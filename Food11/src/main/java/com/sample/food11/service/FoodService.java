package com.sample.food11.service;

import com.sample.food11.api.request.CreateAndEditFoodRequest;
import com.sample.food11.model.FoodEntity;
import com.sample.food11.repository.FoodRepository;
import com.sample.food11.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZonedDateTime;

@Service
public class FoodService {
    @Autowired
    private FoodRepository foodRepository;

    @Autowired
    private MenuRepository menuRepository;

    public FoodEntity createFood(
            CreateAndEditFoodRequest request
    ){
        FoodEntity food =
                FoodEntity.
                        builder().name(request.getName()).address(request.getAddress())
                        .createdAt(ZonedDateTime.now())
                        .updatedAt(ZonedDateTime.now())
                        .build();

        foodRepository.save(food);

        return food;
    }

    public void editFood(){

    }

    public void deleteFood(){

    }



}
