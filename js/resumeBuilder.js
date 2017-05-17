/*
This is empty on purpose! Your code to build the resume will go here.
 */


/*
Bio details
 */
 var bio = {
    "name": "Richard Tamunotonye",
    "role": "Web Developer",
    "contacts": {
        "mobile": "+234 8105 393 816",
        "email": "richardtamunotonye@gmail.com",
        "github": "richardtamunotonye",
        "twitter": "@IsmeeRich",
        "location": "2/3 Bernard Carr St, Port Harcourt Town, Port Harcourt, Nigeria"
    },
    "welcomeMessage": "Hello! welcome to my interactive resume page",
    "skills": [" Java Script","HTML", "CSS", "UX/UI Design", "Karate and Public Speaking "],
    "biopic": "images/dope.png",
/*
Bio display function
 */

'display': function() {
    var bioName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(bioName);

    var bioRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(bioRole);

    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);

    var bioMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(bioMessage);

    if (bio.skills.length) {
        var len = bio.skills.length;
        // Append all the skills, and the skills title
        $('#header').append(HTMLskillsStart);
        for (var skill = 0; skill < len; skill++) {
            $('#skills').append(HTMLskills.replace('%data%', bio.skills[skill] ));
        }
    }

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
            "description": "I was the Team Lead for UX/UI Designs, i conducted user experience"+
                            " research for clients and also did several corporate branding projects."
        },
        {
            "employer": "Sync-Tech Link",
            "title": "Web Developer",
            "location": "#75 Ekerekan Ama, Opposite Okrika Local Goverment Council",
            "dates": "2015 - 2017",
            "description": " I designed several one-page Front-End "
        },

    ],

    /*
Work display function
 */

    'display': function() {

  for (var i = 0, len = work.jobs.length; i < len; i++) {

    $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedLocation);

    }
    }
};
/*
Project Details
 */
var projects = {
    "projects": [
        {
            "title": "Andela Android Learning Community",
            "dates": "2017 ",
            "description": " I was a fascilitator in the Andeala Learning Community in Port Harcourt",
            "images": ["images/andela.jpg"],
            "url": "https://andela.com/"
        },
        {
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "In this project i designed a responsive portfolio site inline with mockup provided by Udacity ",
            "images":["images/img001.png"],
            "url": "https://github.com/richardtamunotonye/Udacity_Frontend-Nanodegree-Project-Build-a-Portfolio-Site"
        }
    ],

    /*
Project display function
 */
    'display': function() {
            for (var i = 0, iLen = projects.projects.length; i < iLen; i++) {

    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
    $(".project-entry:last").append(formattedDescription);
    for (var j = 0, jLen = projects.projects[i].images.length; j < jLen; j++){
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
    $(".project-entry:last").append(formattedImage);
    }
}
   }
};
    /*
Education Details
 */
var education = {
    "schools": [
        {
            "name": "University of Port Harcourt",
            "location": "University of Port Harcourt, East/West Road, PMB 5323 Choba, Rivers State, Nigeria",
            "degree": "B.Sc",
            "majors": ['Computer Science'],
            "dates": "2017",
            "url": "http://www.uniport.edu.ng/"
        },
    ],

    "onlineCourses": [
        {
            "title": "Android for Beginers",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/android-development-for-beginners--ud837"
        },
        {
            "title": "Front-End Developer Nanodegree",
            "school": " Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    /*
Display education function
 */
    'display': function() {

    $("#education").append(HTMLschoolHeader);


    for (var i = 0, iLen = education.schools.length; i < iLen; i++) {

    $("#education").append(HTMLschoolStart);

        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedschoolName);

        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        $(".education-entry:last").append(formattedschoolDates);

        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedschoolDegree);

        for (var j = 0, jLen = education.schools[i].majors.length; j < jLen; j++) {
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
        $(".education-entry:last").append(formattedschoolMajor);
    }

        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedschoolLocation);

        var formattedschoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url).replace("#", education.schools[i].url);
        $(".education-entry:last").append(formattedschoolURL);

    }


   $("#education").append(HTMLonlineClasses);
for (var k = 0, len = education.onlineCourses.length; k < len; k++) {
        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title).replace("#", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedonlineTitle);

        var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates);
        $(".education-entry:last").append(formattedonlineDate);

        var formattedonlineschoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[k].url).replace("#", education.onlineCourses[k].url);
        $(".education-entry:last").append(formattedonlineschoolURL);
        $("#education").append(HTMLschoolStart);

    }

}

};

bio.display();
work.display();
projects.display();

education.display();


$('#mapDiv').append(googleMap);
