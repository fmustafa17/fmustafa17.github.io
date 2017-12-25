var bio = {
    "name": "Farhana Mustafa",
    "role": "Aspiring Front End Engineer",
    "contacts": {
        "mobile": "646-919-7836",
        "email": "farhana mustafa 3 at gmail",
        "github": "fmustafa17",
        "twitter": "farhanaxmustafa",
        "location": "New York City"
    },
    "welcomeMessage": "Looking for full time employment within the Software Development field.",
    "skills": [
        "Java", "HTML5", "CSS3", "JavaScript", "Swift", "Python", "Git", "Unix"
    ],
    "biopic":"images/linkedin.jpg"
};

var education = {
    "school": [
        {
            "name": "Syracuse University",
            "dates": "2014 - 2018",
            "degree": "Bachelor's of Science",
            "majors": ["Computer Science"],
            "location": "Syracuse, NY",
            "courses": [
                "Algorithms",
                "Artificial Intelligence",
                "Computer Architecture",
                "Data Structures",
                "Human Computer Interaction",
                "Mobile Application Programming",
                "Operating Systems",
                "Social Media Mining"
            ]

        }
    ],
    "onlineCourses": [
        {
            "title": "Front End Web Development Nanodegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "studyAbroad": [
        {
            "HK": "Hong Kong",
            "SING": "Singapore",
            "ML": "Melacca, Malaysia",
            "TL": "Bangkok, Thailand"
        }
    ]
};

var work = {
    "jobs": [
        {
            "employer": "iD Tech Camp",
            "title": "Lead Instructor",
            "location": "New York, NY",
            "dates": "May - August 2017 and May - August 2016",
            "description": "Taught daily introductory programming classes for 7 – 17 year old kids. Customized lesson plans to accommodate and challenge students of differing skill sets. Single handedly organized and engaged staff and students to camp wide activities."
        },
        {
            "employer": "Syracuse University’s Information Technology Services",
            "title": "Technology Consultant",
            "location": "Syracuse, NY",
            "dates": "August 2015 – May 2016",
            "description": "Provided computing support for students, staff and faculty face to face in a timely fashion. Troubleshooted software and hardware problems for Macs, PCs, and mobile phones."
        },
        {
            "employer": "Department of Information Technology and Telecommunications",
            "title": "Web Development Intern",
            "location": "Brooklyn, NY",
            "dates": "June – August 2015",
            "description": "Restructured new company website through creating the user interface and site layouts. Deployed all final changes through company’s server."   
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Personal Website",
            "dates": "In Development",
            "description": "Personal website to showcase front end development skills and projects. Deployed through GitHub pages and coded by scratch with Bootstrap.js features.",
            "images": [
                "http://via.placeholder.com/350x150"
            ]
        },
        {
            "title": "Doodle Pal",
            "dates": "October - December 2017",
            "description": "Developed A.I. drawing application with TensorFlow’s Magenta library. Used “Google Quick, Draw!” dataset and Sketch-RNN.js to complete user’s unfinished drawing.",
            "images": [
                "http://via.placeholder.com/350x150"
            ]
        },
        {
            "title": "Recommend and Chill",
            "dates": "March - May 2017",
            "description": "Implemented Spotify API calls with Python to analyze artists and songs of a user’s music playlist. Utilized Plot.ly API to show data found as the song recommendations.",
            "images": [
                "http://via.placeholder.com/350x150"
            ]
        },
        {
            "title": "Color My Kicks",
            "dates": "November - Decemeber 2016",
            "description": "Created an iOS 10 application with Swift of popular sneaker designs featuring 9 various colors. Customized adjustable settings for brush size, opacity and custom colors.",
            "images": [
                "http://via.placeholder.com/350x150"
            ]
        }
    ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    
    $("#header").append(formattedPic);
    $("#header").append(formattedMessage);
    
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    
    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
    
    
    if(bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var skill = 0; skill < bio.skills.length; skill++) {
            var formattedSkill = HTMLskills.replace("%data%",bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}



education.display = function() {
    for(var item = 0; item < education.school.length; item++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[item].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.school[item].degree);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.school[item].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.school[item].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.school[item].majors);
    
        $(".education-entry").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDate, formattedSchoolLocation, formattedSchoolMajor);
    }

    for (var i=0; i < education.onlineCourses.length ; i++) {
        // $("#education").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
        
        $(".education-entry").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    }
}


work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
    
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
    
        $(".work-entry:last").append(formattedEmployerTitle);
    
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
    
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function () {
    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);
        var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(formattedProjTitle);
    
        var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(formattedProjDates);
    
        var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(formattedProjDescription);   
        
        var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[proj].images);
        $(".project-entry:last").append(formattedImg); 
    }
}



function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowercase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
