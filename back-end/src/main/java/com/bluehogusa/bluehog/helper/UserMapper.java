package com.bluehogusa.bluehog.helper;

import com.bluehogusa.bluehog.domain.User;
import com.bluehogusa.bluehog.dto.UserDto;

public class UserMapper {
    public static User toUser(UserDto userDto) {
        return new User(
                userDto.name(),
                userDto.email(),
                userDto.phone(),
                userDto.state(),
                userDto.city(),
                userDto.street(),
                userDto.zip());
    }

    public static UserDto toUserDto(User user) {
        return new UserDto(
                user.getName(),
                user.getEmail(),
                user.getPhone(),
                user.getState(),
                user.getCity(),
                user.getStreet(),
                user.getZip());
    }

}
