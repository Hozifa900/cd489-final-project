package com.bluehogusa.bluehog.dto;

public record UserDto(
        String name,
        String email,
        String phone,
        String state,
        String city,
        String street,
        String zip) {

}
