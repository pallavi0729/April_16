$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "jbk-offline-application;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "password"
      ],
      "line": 12,
      "id": "jbk-offline-application;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 13,
      "id": "jbk-offline-application;login-test;;2"
    },
    {
      "cells": [
        "pallavi@gmail.com",
        "dfgbn"
      ],
      "line": 14,
      "id": "jbk-offline-application;login-test;;3"
    },
    {
      "cells": [
        "Gargi@gmail.com",
        "123"
      ],
      "line": 15,
      "id": "jbk-offline-application;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2804417100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2224092200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 1203990700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 11083600,
  "status": "passed"
});
formatter.after({
  "duration": 158208900,
  "status": "passed"
});
formatter.before({
  "duration": 1448598700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"pallavi@gmail.com\" and \"dfgbn\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2635903500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pallavi@gmail.com",
      "offset": 13
    },
    {
      "val": "dfgbn",
      "offset": 37
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 357592800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 8000300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdef.LoginStepdef.user_should_be_on_home_page(LoginStepdef.java:51)\r\n\tat ✽.Then user should be on home page(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 104217600,
  "status": "passed"
});
formatter.before({
  "duration": 1397637700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@jbk"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters \"Gargi@gmail.com\" and \"123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2515831000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gargi@gmail.com",
      "offset": 13
    },
    {
      "val": "123",
      "offset": 35
    }
  ],
  "location": "LoginStepdef.user_enters_and(String,String)"
});
formatter.result({
  "duration": 354407700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 6067700,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdef.LoginStepdef.user_should_be_on_home_page(LoginStepdef.java:51)\r\n\tat ✽.Then user should be on home page(Login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 84837700,
  "status": "passed"
});
formatter.before({
  "duration": 1502973700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "logo test",
  "description": "",
  "id": "jbk-offline-application;logo-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user should see JBK logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 2322115800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_see_JBK_logo()"
});
formatter.result({
  "duration": 108362000,
  "status": "passed"
});
formatter.after({
  "duration": 107873600,
  "status": "passed"
});
});