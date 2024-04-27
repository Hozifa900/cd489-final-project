package com.bluehogusa.bluehog;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import com.bluehogusa.bluehog.intigrationTests.OrderRestTests;
import com.bluehogusa.bluehog.unitTests.OrderItemMapperTests;
import com.bluehogusa.bluehog.unitTests.OrderMapperTests;
import com.bluehogusa.bluehog.unitTests.UserMapperTests;

@RunWith(Suite.class)
@SuiteClasses({ OrderItemMapperTests.class, OrderMapperTests.class,
        UserMapperTests.class, OrderRestTests.class })
public class AllTests {
}
