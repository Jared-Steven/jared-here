// script.js

document.getElementById('hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// script.js

function learnMore() {
    alert("More information coming soon!");
}

// Script for FAQ Section
document.addEventListener('DOMContentLoaded', function() {
	    const faqItems = document.querySelectorAll('.faq-item');

	    faqItems.forEach(item => {
		const question = item.querySelector('.faq-question');
		question.addEventListener('click', () => {
		    item.classList.toggle('active');
		});
	    });
	});       

// Script for Working Process section

document.addEventListener('DOMContentLoaded', function() {
	  const timelineItems = document.querySelectorAll('.timeline-item');
	  
	  function checkScroll() {
	    timelineItems.forEach(item => {
	      const itemTop = item.getBoundingClientRect().top;
	      if (itemTop < window.innerHeight * 0.8) {
		item.classList.add('visible');
	      }
	    });
	  }
	  
	  window.addEventListener('scroll', checkScroll);
	  checkScroll(); // Initial check
	});
// Script for project worked on

const projects = [
    {
        name: "Hotel Reservation Prediction",
        image: "./Image Assets/Project Images/Hotel Reservation Prediction.png",
        link: "https://github.com/Jared-Steven/Hotel-Reservation-Analysis-Cancellation-Prediction"
    },
    {
        name: "Plant Disease Detection",
        image: "./Image Assets/Project Images/Plant disease detection.png",
        link: "https://github.com/Jared-Steven/Plant-Disease-Detection-"
    },
    {
        name: "AI Based Timetable Generator",
        image: "./Image Assets/Project Images/AI Based Timetable Generator.png",
        link: "https://github.com/Jared-Steven/Automatic-Timetable-Generator"
    },
    {
        name: "Audio Book Creator",
        image: "./Image Assets/Project Images/AudioBook Creator.png",
        link: "https://github.com/Jared-Steven/Audio-Book-Creator"
    },
    {
        name: "Youtube Video Transcriber",
        image: "./Image Assets/Project Images/Youtube video Transcriber.png",
        link: "https://github.com/Jared-Steven/YouTube-Video-Transcriber"
    },
    {
        name: "Captcha Solver Using Speech Recognition",
        image: "./Image Assets/Project Images/Captcha Solver Using Speech Recognition.png",
        link: "https://github.com/Jared-Steven/Captcha-Solver-Using-Speech-Recognition"
    },
    {
        name: "Heart Attack Risk Prediction",
        image: "./Image Assets/Project Images/Heart Attack Risk Predictor.png",
        link: "https://github.com/Jared-Steven/Heart-Attack-Prediction-"
    },
    {
        name: "Recommendation System",
        image: "./Image Assets/Project Images/Recommendation System.png",
        link: "https://github.com/Jared-Steven/Item-Based-Collaborative-Filtering-For-Movie-Recommendation-System"
    },
    {
        name: "Wind Energy production Analysis",
        image: "./Image Assets/Project Images/Wind Energy production Analysis.png",
        link: "https://github.com/Jared-Steven/Daily-Wind-Energy-Production-Capacity-Analysis"
    },
    {
        name: "Text & Audio Analysis",
        image: "./Image Assets/Project Images/Audio Analysis.png",
        link: "https://github.com/Jared-Steven/Collection-And-Analysis-Of-Tamil-Bible-Audio-And-Text-Data"
    },
    // Add more projects as needed
];

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

const projectsPerPage = 3;
let currentPage = 1;

function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    card.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-image">
        <div class="project-info">
            <h3 class="project-name">${project.name}</h3>
            <button class="explore-btn" onclick="openInNewTab('${project.link}')">Explore</button>
        </div>
    `;

    return card;
}

function renderProjects() {
    const projectGrid = document.getElementById('projectGrid');
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const projectsToShow = projects.slice(startIndex, endIndex);

    projectsToShow.forEach(project => {
        const card = createProjectCard(project);
        projectGrid.appendChild(card);
    });

    updateShowMoreButton();
}

function updateShowMoreButton() {
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (currentPage * projectsPerPage >= projects.length) {
        showMoreBtn.style.display = 'none';
    } else {
        showMoreBtn.style.display = 'block';
    }
}

function showMoreProjects() {
    currentPage++;
    renderProjects();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    document.getElementById('showMoreBtn').addEventListener('click', showMoreProjects);
});

// code for the about section

document.addEventListener('DOMContentLoaded', () => {
	    const aboutSection = document.querySelector('.about');
	    aboutSection.style.opacity = 0;
	    
	    setTimeout(() => {
		aboutSection.style.transition = 'opacity 1s ease-in-out';
		aboutSection.style.opacity = 1;
	    }, 100);
	});

//code for the Services section

document.addEventListener('DOMContentLoaded', function() {
	  const cards = document.querySelectorAll('.service-card');
	  
	  cards.forEach(card => {
	    card.addEventListener('mouseover', function() {
	      this.style.transform = 'translateY(-10px)';
	    });
	    
	    card.addEventListener('mouseout', function() {
	      this.style.transform = 'translateY(0)';
	    });
	  });
	});  
	
	
	
//code for the Testimonial section	
document.addEventListener('DOMContentLoaded', () => {
	    const slider = document.querySelector('.slider');
	    const slides = document.querySelectorAll('.slide');
	    let currentIndex = 0;

	    function showSlide(index) {
		slider.scrollTo({
		    left: slides[index].offsetLeft,
		    behavior: 'smooth'
		});
	    }

	    function nextSlide() {
		currentIndex = (currentIndex + 1) % slides.length;
		showSlide(currentIndex);
	    }

	    // Auto-slide every 5 seconds
	    setInterval(nextSlide, 5000);
	}); 
