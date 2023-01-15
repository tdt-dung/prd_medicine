


/*
CREATE TABLE tbl_Company (

    Company_ID INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    Company_Name TEXT NOT NULL,
    Company_Website TEXT NOT NULL,
    Company_Tax_Code TEXT NOT NULL,
    Company_Business_Field TEXT NOT NULL,
    Company_Official_Address TEXT NOT NULL,
    Company_Contact_Phone VARCHAR( 10 ) NOT NULL,
    Company_Contact_Email TEXT NOT NULL,
    Company_Contact_Person TEXT NOT NULL,
    Company_Time_Zone VARCHAR( 7 ) NOT NULL,
    Timestamp_Created TIMESTAMP NOT NULL,
    Record_Supplied_By_Employee_ID INT NOT NULL

);

CREATE TABLE tbl_DepartmentDetail (

    Department_ID INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Department_Name TEXT NOT NULL,
    Department_Description TEXT NOT NULL,
    Company_ID INT NOT NULL,
    Timestamp_Created TIMESTAMP NOT NULL

);

CREATE TABLE tbl_JobTitle (

    Job_Title_ID VARCHAR( 12 ) PRIMARY KEY NOT NULL,
    Job_Title_Descripttion TEXT

);

CREATE TABLE tbl_JobLevel (

    Job_Level_ID VARCHAR( 12 ) PRIMARY KEY NOT NULL,
    Job_Level_Description TEXT

);

CREATE TABLE tbl_UserLevel (

    User_Level_ID VARCHAR( 12 ) PRIMARY KEY NOT NULL,
    User_Level_Description TEXT

);

CREATE TABLE tbl_EmployeeDetail (

    Company_ID INT NOT NULL,
    Employee_ID INT AUTO_INCREMENT NOT NULL,
    First_Name TEXT NOT NULL,
    Last_Name TEXT NOT NULL,
    Birthday TIMESTAMP NOT NULL,
    Gender VARCHAR( 7 ) NOT NULL,
    Email TEXT NOT NULL,
    Social_ID_No VARCHAR( 33 ) NOT NULL,
    ISO_2Letter_Country_Code VARCHAR( 2 ) NOT NULL,
    Timestamp_From TIMESTAMP NOT NULL,
    Timestamp_To TIMESTAMP,
    Record_Supplied_By_Employee_ID INT NOT NULL,
    PRIMARY KEY ( Company_ID, Employee_ID )

);

CREATE TABLE tbl_LevelAssignment (

    Company_ID INT NOT NULL,
    Department_ID INT NOT NULL,
    Job_Title_ID VARCHAR( 12 ) NOT NULL,
    Job_Level_ID VARCHAR( 12 )NOT NULL,
    User_Level_ID VARCHAR( 12 ) NOT NULL,
    Timestamp_From TIMESTAMP NOT NULL,
    Timestamp_To TIMESTAMP,
    Record_Supplied_By_Employee_ID INT NOT NULL,
    PRIMARY KEY ( Company_ID, Department_ID, Job_Title_ID )

);

CREATE TABLE tbl_JobAssignment (

    Company_ID INT NOT NULL,
    Employee_ID INT NOT NULL,
    Department_ID TEXT NOT NULL,
    Job_Title_ID VARCHAR( 12 ) NOT NULL,
    Timestamp_From TIMESTAMP NOT NULL,
    Timestamp_To TIMESTAMP,
    Employee_Managed_By_Employee_ID TEXT NOT NULL,
    Record_Supplied_By_Employee_ID INT NOT NULL,
    PRIMARY KEY ( Company_ID, Employee_ID )

);

CREATE TABLE tbl_SignUp (

    Company_ID INT NOT NULL,
    Employee_ID INT NOT NULL,
    Current_Password TEXT NOT NULL,
    Sign_Up_Hash TEXT NOT NULL,
    User_Status TEXT NOT NULL,
    Timestamp_From TIMESTAMP NOT NULL,
    Timestamp_To TIMESTAMP NOT NULL,
    PRIMARY KEY ( Company_ID, Employee_ID )

);

CREATE TABLE tbl_UserApproval (

    Company_ID INT NOT NULL,
    Employee_ID INT NOT NULL,
    Timestamp_Requested TIMESTAMP NOT NULL,
    Timestamp_Approved TIMESTAMP,
    Timestamp_Rejected TIMESTAMP,
    PRIMARY KEY ( Company_ID, Employee_ID )

);
*/
















