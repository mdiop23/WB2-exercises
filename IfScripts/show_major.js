"use strict";


//inputs
var studentName, studentMajor, departmentOffice, majorName;
studentName = "Betty"
studentMajor = "ENG"
departmentOffice = ""
majorName = ""


//statements

if(studentMajor = "ENG"){
    majorName = "English" 
    departmentOffice = "Kerr Hall, Room 201"
}
else if (studentMajor = "BIOL"){
    majorName = "Biology"
    departmentOffice = "Science Bldg, Room 310"
}
else if (studentMajor = "CSCI"){
    majorName = "Computer Science"
    departmentOffice = "Sheppard Hall, Room 314"
}
else if (studentMajor = "HIST"){
    majorName = "History"
    departmentOffice = "Kerr Hall, Room 114"
}
else if (studentMajor = "MKT"){
    majorName = "Marketing"
    departmentOffice = "Westly Hall, Room 310"
}
else {
    majorName = "<unknown>"
    departmentOffice = ""}

    console.log(studentName);
    console.log(majorName);
    console.log(departmentOffice);