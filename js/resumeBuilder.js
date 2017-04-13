/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*
Bio details
 */
var bio = {
    "name": "Richard Tamunotonye",
    "role": "Web Developer",
    "contacts" : {
    "mobile" : "+234 8105 393 816",
    "email": "hellotams@gmail.com",
    "gitHub": "richardtamunotonye",
    "twitter": "@IsmeeRich",
    "location": "3 Bernard Carr St, Port Harcourt Town, Port Harcourt, Nigeria"
    },
    "welcomeMessage": "Hello! welcome to my interactive resume page",
    "skills": ["[ JS, HTML, CSS, UX/UI Design, Karate and Piblic Speaking ]"],
    "bioPic": "images/dope.png",
/*
Bio display function
 */

'display': function() {
    var bioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(bioName);

    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(bioRole);

    var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(bioPic);

    var bioMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioMessage);

    $("#header").append(HTMLskillsStart);
    var bioSkills = HTMLskills.replace("%data%", bio.skills);
    $("#skills").append(bioSkills);

    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $('#topContacts').append(formattedmobile);

    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    $('#topContacts').append(formattedemail);

    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    $('#topContacts').append(formattedgithub);

    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $('#topContacts').append(formattedtwitter);

    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').append(formattedlocation);

    $('#topContacts').children().clone().appendTo('#footerContacts');

  }
};

bio.display();

/*
Work details
 */

var work = {
    "jobs": [
        {
            "employer": "Rivers State Library Board ICT",
            "title": "Graphic/ UX/UI Designer",
            "location": "Rivers State Central Library, 2/3 Bernard Carr Streen, Port Harcourt, Nigeria",
            "dates": "2011 - 2013",
            "description": "I was the Team Lead for UX/UI Designs, i conducted user experience research for clients and also did several corporate branding projects."
        },
        {
            "employer": "Sync-Tech Link",
            "title": "Web Developer",
            "location": "Marine Base, PMB 5028, Port Harcourt.",
            "dates": "2015 - 2017",
            "description": " I designed several one-page Front-End "
        },

    ],

    /*
Work display function
 */

    'display': function() {

    for (job in work.jobs) {

    $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

    }
    }
};

work.display();

/*
Project Details
 */

var projects = {
    "projects": [
        {
            "title": "Andela Android Learning Community",
            "dates": "2017 ",
            "description": " I was a fascilitator in the Andeala Learning Community in Port Harcourt",
            "images": "images/andela.jpg",
            "url": "https://andela.com/"
        },
        {
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "In this project i designed a responsive portfolio site inline with mockup provided by Udacity ",
            "images": "images/img001.png",
            "url": "https://github.com/richardtamunotonye/Udacity_Frontend-Nanodegree-Project-Build-a-Portfolio-Site"
        }
    ],

    /*
Project display function
 */

    'display': function() {
    for (project in projects.projects) {

    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
    $(".project-entry:last").append(formattedImage);

    }
    }
};

projects.display();

    /*
Education Details
 */
var education = {
    "schools": [
        {
            "name": "University of Port Harcourt",
            "location": "University of Port Harcourt, East/West Road, PMB 5323 Choba, Rivers State, Nigeria",
            "degree": "B.Sc",
            "majors": "Computer Science",
            "dates": 2017,
            "url": "http://www.uniport.edu.ng/"
        },
    ],

    "onlineCourses": [
        {
            "title": "Android for Beginers",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
        },
        {
            "title": "Front-End Developer Nanodegree",
            "school": " Udacity",
            "dates": 2017 ,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    /*
Display education function
 */
    'display': function() {

    $("#education").append(HTMLschoolHeader);

    for (school in education.schools) {

    $("#education").append(HTMLschoolStart);


        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedschoolDegree);

        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedschoolMajor);

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url).replace("#", education.schools[school].url);
        $(".education-entry:last").append(formattedschoolURL);

    }

   $("#education").append(HTMLonlineClasses);

   for (course in education.onlineCourses) {

    $("#education").append(HTMLschoolStart);


        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedonlineDate);

        var formattedonlineschoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedonlineschoolURL);

    }

}

};

education.display();


var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = _html.replace(/<|>|script/gi,"");
    return newHTML;
};


/**
Google Map*/

var googleMap = '<div id="map"></div>';
$("#mapDiv").append(googleMap);
