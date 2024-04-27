package com.bluehogusa.bluehog.unitTests;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import com.bluehogusa.bluehog.domain.User;
import com.bluehogusa.bluehog.dto.UserDto;
import com.bluehogusa.bluehog.helper.UserMapper;

public class UserMapperTests {
    private User user;
    private UserDto userDto;

    @Before
    public void setUp() {
        user = new User("name", "email", "phone", "state", "city", "street", "zip");
        userDto = new UserDto("name", "email", "phone", "state", "city", "street", "zip");
    }

    @After
    public void tearDown() {
        user = null;
        userDto = null;
    }

    @Test
    public void toUserTest() {
        User user = UserMapper.toUser(userDto);
        assert (user.getName().equals("name"));
        assert (user.getEmail().equals("email"));
        assert (user.getPhone().equals("phone"));
        assert (user.getState().equals("state"));
        assert (user.getCity().equals("city"));
        assert (user.getStreet().equals("street"));
        assert (user.getZip().equals("zip"));
    }

    @Test
    public void toUserDtoTest() {
        UserDto userDto = UserMapper.toUserDto(user);
        assert (userDto.name().equals("name"));
        assert (userDto.email().equals("email"));
        assert (userDto.phone().equals("phone"));
        assert (userDto.state().equals("state"));
        assert (userDto.city().equals("city"));
        assert (userDto.street().equals("street"));
        assert (userDto.zip().equals("zip"));
    }

}
