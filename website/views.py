from django.shortcuts import render

from django.shortcuts import render

def home(request):

    projects = [

        {
            "title": "Smart Resume Analyzer",
            "image": "images/project1.jpg",
            "description": "AI-powered ATS Resume Screening System built using Django.",
            "tech": ["Python", "Django", "HTML", "CSS"],
            "github": "#",
            "demo": "#"
        },

        {
            "title": "Personal Portfolio",
            "image": "images/portfolio.jpg",
            "description": "Modern animated portfolio created using Django and GSAP.",
            "tech": ["html","css","JavaScript","python","Django","GSAP"],
            "github": "https://github.com/rohitsharma1218/personal_portfolio",
            "demo": "#"
        },

        {
            "title": "Calculator",
            "image": "images/calculator.jpg",
            "description": "Simple calculator built with Python and Django.",
            "tech": ["html","css","Python", "flask"],
            "github": "#",
            "demo": "#"
        }

    ]

    return render(request, "index.html", {
        "projects": projects
    })