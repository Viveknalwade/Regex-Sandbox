# Regex-Sandbox
In this lab ,we have to enable the regex sandbox to test a regular expression against a string and highlight the results.
# Objective: 
Fulfill the user stories below and get all the tests to pass to complete the lab.
# User Stories:
1.	You should access the #pattern, #test-string, #test-btn, and #result elements and save them in the variables regexPattern, stringToTest, testButton, and testResult, respectively.
2.	You should access the #i and #g flag checkboxes and save them in the variables caseInsensitiveFlag and globalFlag, respectively.
3.	You should have a function named getFlags that returns a string containing the flags from checked flag checkboxes, or an empty string if none of them have been checked.
4.	When you click the testButton button, if the regex pattern matches the test string, the matched text should be highlighted. To highlight the matches, replace each match with the same text surrounded by a span element with the class of highlight. Note that the CSS for that has been already added for you.
5.	When there's a match, the matched text should be displayed inside #result. In case of multiple matches, each matched text should be separated from the next one by a comma and a space.
6.	When there's no match, the text no match should be displayed inside #result.
