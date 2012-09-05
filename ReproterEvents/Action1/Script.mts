
myName=inputbox ("Enter your Name", "Name")

If myName="x" Then
	Reporter.ReportEvent micPass, "The test is Ok", "Pass"
	else
	Reporter.ReportEvent micFail, "The test is NOT OK", "Fail"
End If






