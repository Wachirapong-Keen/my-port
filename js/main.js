 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();


   var burgerMenu = function() {

		$('.js-colorlib-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');	
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');	
			}
		});
	};
	burgerMenu();

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
	    	
	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
			
	    	}
		});

	};
	mobileMenuOutsideClick();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});

	};
	carousel();

	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });




})(jQuery);


// 🌐 Language Translation System
const translations = {
  en: {
    home: 'Home',
    about: 'About Me',
    skills: 'My Skills',
    portfolio: 'Portfolio',
    contact: 'Contact',
    subheading: 'Hello',
    name: 'Wachirapong Rueangwarapan',
    intro: 'Hi, I\'m Keen. I\'m a Junior Full-Stack Developer passionate about technology and programming. I graduated from Bangkok University with a degree in Computer Science and aim to grow as a professional programmer. I\'m always ready to learn and develop new skills to stay current with rapidly evolving technology.',
    aboutTitle: 'About Me',
    aboutDesc: 'Junior Full-Stack Developer interested in developing Web Applications and RESTful APIs. I have experience in developing internal systems for organizations on both Front-end and Back-end, as well as working with databases. I focus on developing practical solutions and continuously learning new technologies.',
    experience: 'Experience',
    education: 'Education',
    mySkills: 'My Skills',
    codingSkills: 'Coding Skills',
    aiSkills: 'AI & Automation & Data Skills',
    tools: 'Tools',
    certificateTitle: 'Certificate',
    contactTitle: 'Contact Me',
    contactDesc: 'I\'m currently available for work and open to new opportunities.<br>Feel free to reach out!',
    
    // Experience
    planBMedia: 'Plan B Media',
    planBDates: '12 Jan - 15 Feb',
    planBPosition: 'Position: Software Developer Intern',
    planBResponsibilities: 'Responsibilities: Developed and maintained systems for internal company operations, worked on both Frontend and Backend, managed database',
    
    // Education
    bangkokUniv: 'Bangkok University',
    bangkokDates: '2022 – 2026',
    bangkokDesc: 'Bachelor of Science in Computer Science, Faculty of Information Technology and Innovation.',
    bangkokGPA: 'GPA: 3.35',
    
    annalai: 'Annalai School',
    annalaiDates: '2019 – 2022',
    annalaiDesc: 'Arts - Chinese',
    annalaiGPA: 'GPA: 2.90',
    
    // Portfolio
    busemTitle: 'BUSEM Seminar Website',
    busemDesc: 'BUSEM Seminar Project is a collaboration between students and the Faculty of Business and Business Administration to create a website for registering seminars for students within the faculty.',
    
    weatherTitle: 'WeatherSpring',
    weatherDesc: 'WeatherSpring is a website for checking the weather in various provinces of Thailand at the current time.',
    
    n8nTitle: 'n8n Chat bot',
    n8nDesc: 'n8n Chatbot AI agent using n8n, Google Gemini, Wikipedia API, and Simple Memory to build a Q&A chatbot that processes input information with AI.',
    
    newLegalTitle: 'New Legal',
    newLegalDesc: 'New Legal is a website project about legal matters for requesting guarantee letters within Plan B Media company. This was an internship project where I was responsible for the guarantee letter request page and letter creation, working on both front-end and back-end, including database management.',
    
    lineBotTitle: 'Line Chat Bot',
    lineBotDesc: 'Line Chatbot Vertex AI using Gemini to process text and answer questions from users. Data comes from RAG or company files at Plan B Media for employee Q&A. This project is currently at the POC stage.',
    
    avatarTitle: 'Avatar Orientation',
    avatarDesc: 'Avatar Orientation is a website for presenting slides during Plan B Media\'s Orientation day. The idea involves using an Avatar for presentation instead of a person to reduce the burden of those presenting. TTS (Text-to-Speech) technology is used to allow the Avatar to speak and answer questions.',
    
    // Certificates
    chatgptCertTitle: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    chatgptCertDesc: 'A course on developing automation that can help answer customer service questions using ChatGPT with Python. Suitable for those who want to apply AI in business.',
    
    cybersecurityTitle: 'Basic Cybersecurity',
    cybersecurityDesc: 'Basic Cybersecurity Certificate about protecting against data breaches and counterintelligence data verification.',
  },
  th: {
    home: 'หน้าแรก',
    about: 'เกี่ยวกับฉัน',
    skills: 'ทักษะ',
    portfolio: 'ผลงาน',
    contact: 'ติดต่อ',
    subheading: 'สวัสดีครับ',
    name: 'วชิรพงศ์ เรืองวราพันธุ์',
    intro: 'สวัสดีครับ ผมชื่อ วชิรพงศ์ เรืองวราพันธุ์ (คีน) จบการศึกษาจากมหาวิทยาลัยกรุงเทพ สาขาวิทยาการคอมพิวเตอร์ และมีความสนใจด้านเทคโนโลยีรวมถึงการพัฒนาโปรแกรม โดยมีเป้าหมายในการเติบโตเป็นโปรแกรมเมอร์ในอนาคต ผมพร้อมเรียนรู้และพัฒนาทักษะใหม่ ๆ อยู่เสมอ เพื่อให้สามารถปรับตัวและก้าวทันกับเทคโนโลยีที่เปลี่ยนแปลงอย่างต่อเนื่อง',
    aboutTitle: 'เกี่ยวกับฉัน',
    aboutDesc: 'นักพัฒนาโปรแกรมระดับ Junior (Full-Stack Developer) ที่สนใจด้านการพัฒนา Web Application และ RESTful APIs มีประสบการณ์ในการพัฒนาระบบภายในองค์กร ทั้งฝั่ง Front-end และ Back-end รวมถึงการทำงานร่วมกับฐานข้อมูล มุ่งเน้นการพัฒนาโซลูชันที่สามารถใช้งานได้จริง พร้อมเรียนรู้และพัฒนาทักษะด้านเทคโนโลยีใหม่ ๆ อย่างต่อเนื่อง',
    experience: 'ประสบการณ์',
    education: 'การศึกษา',
    mySkills: 'ทักษะ',
    codingSkills: 'ทักษะการเขียนโค้ด',
    aiSkills: 'ทักษะ AI & Automation & Data',
    tools: 'เครื่องมือ',
    certificateTitle: 'ใบรับรอง',
    contactTitle: 'ติดต่อ',
    contactDesc: 'ผมพร้อมรับงาน เปิดรับโอกาสการทำงานใหม่ ๆ<br>โปรดติดต่อได้เลย!',
    
    // Experience
    planBMedia: 'Plan B Media',
    planBDates: '12 Jan - 15 Feb',
    planBPosition: 'ตำแหน่ง: ฝึกงาน Software Developer',
    planBResponsibilities: 'ความรับผิดชอบ: พัฒนาและดูแลระบบสำหรับงานภายในบริษัท, ทำงานทั้งฝั่ง Frontend และ Backend, จัดการฐานข้อมูล',
    
    // Education
    bangkokUniv: 'มหาวิทยาลัยกรุงเทพ',
    bangkokDates: '2565 – 2569',
    bangkokDesc: 'ปริญญาวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ คณะเทคโนโลยีสารสนเทศและนวัตกรรม',
    bangkokGPA: 'GPA: 3.35',
    
    annalai: 'โรงเรียนอัสสัญชัญ',
    annalaiDates: '2562 – 2565',
    annalaiDesc: 'สายศิลป์ - จีน',
    annalaiGPA: 'GPA: 2.90',
    
    // Portfolio
    busemTitle: 'เว็บไซต์สัมมนา BUSEM',
    busemDesc: 'โปรเจค BUSEM Seminar เป็นโปรเจคที่เกิดขึ้นมาจากความร่วมมือของนักศึกษา และคณะการสร้างเจ้าของธุรกิจและการบริหารกิจการ เพื่อทำเว็บไซต์สำหรับลงทะเบียนงานสัมมนาของนักศึกษาภายในคณะ',
    
    weatherTitle: 'WeatherSpring',
    weatherDesc: 'WeatherSpring เป็นเว็บไซต์ตรวจเช็คสภาพอากาศในจังหวัดต่างๆของประเทศไทย ณ เวลาปัจจุบัน',
    
    n8nTitle: 'n8n Chat bot',
    n8nDesc: 'n8n Chatbot AI agent ใช้ n8n, Google Gemini, Wikipedia API, Simple Memory มาสร้าง Chatbot ถาม-ตอบ ที่นำข้อมูลที่ป้อนไปประมวลผลด้วย AI',
    
    newLegalTitle: 'New Legal',
    newLegalDesc: 'New Legal เป็นโปรเจคเว็บไซต์เกี่ยวกับกฎหมายสำหรับการทำเรื่องขอหนังสือค้ำประกันต่างๆภายในบริษัท Plan B Media ซึ่งเป็นโปรเจคที่ทำในระหว่างฝึกงาน โดยรับผิดชอบในหน้าการขอหนังสือค้ำประกัน และการสร้างหนังสือค้ำประกัน โดยทำงานทั้งในส่วนการทำงานหน้าบ้าน และหลังบ้าน รวมถึงการจัดการฐานข้อมูล',
    
    lineBotTitle: 'Line Chat Bot',
    lineBotDesc: 'Line Chatbot Vertex AI ที่ใช้ Gemini ในการประมวลผลข้อความและตอบคำถามจากผู้ใช้ โดยจะนำข้อมูลมาจาก RAG หรือไฟล์ข้อมูลภายในบริษัท Plan B Media มาเพื่อให้หนักงานใช้สำหรับถามตอบ แต่งานนี้อยู่ในระดับ POC',
    
    avatarTitle: 'Avatar Orientation',
    avatarDesc: 'Avatar Orientation เป็นโปรเจคเว็บไซต์ที่ใช้ในการแสดงพูดนำเสนอสไลด์ในวัน Orientation ของบริษัท Plan B Media โดยได้มีแนวคิดการนำ Avatar มาใช้ในการนำเสนอแทนคนเพื่อลดภาระหน้าที่ของผู้ที่ต้องนำเสนอ โดยจะใช้หลักการ TTS (Text-to-Speech) เข้ามาใช้เพื่อให้ Avatar สามารถพูดและตอบคำถามได้',
    
    // Certificates
    chatgptCertTitle: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    chatgptCertDesc: 'หลักสูตรการพัฒนาอัตโนมัติที่สามารถช่วยตอบคำถามลูกค้าในงานบริการ โดยใช้ ChatGPT ร่วมกับ Python เหมาะสำหรับผู้ที่ต้องการนำ AI ไปประยุกต์ใช้ในธุรกิจ',
    
    cybersecurityTitle: 'Basic Cybersecurity',
    cybersecurityDesc: 'ใบยืนยัน Basic Cybersecurity เกี่ยวกับการป้องกันการเจาะข้อมูลและการตรวจสอบข้อมูลของฝ่ายตรงข้าม',
  }
};

// Function to change language
function setLanguage(lang) {
  // Save language preference
  localStorage.setItem('language', lang);
  
  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Update language button styles
  document.querySelectorAll('.language-switcher button').forEach(btn => {
    btn.classList.remove('active');
    btn.style.backgroundColor = '';
    btn.style.color = '';
  });
  
  // Add active style to the clicked button
  if (lang === 'th') {
    document.getElementById('btn-th').classList.add('active');
    document.getElementById('btn-th').style.backgroundColor = '#000000';
    document.getElementById('btn-th').style.color = 'white';
  } else if (lang === 'en') {
    document.getElementById('btn-en').classList.add('active');
    document.getElementById('btn-en').style.backgroundColor = '#000000';
    document.getElementById('btn-en').style.color = 'white';
  }
  
  console.log('Language changed to:', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('language') || 'en';
  setLanguage(savedLang);
});

// Enhanced openModal function to support translations
function openModalTranslated(titleKey, descKey, images) {
  const currentLang = localStorage.getItem('language') || 'en';
  const title = translations[currentLang]?.[titleKey] || titleKey;
  const description = translations[currentLang]?.[descKey] || descKey;
  openModal(title, description, images);
}

