const bars = document.querySelector('.fa-bars');
const list = document.querySelector('.menu-list');
const close = document.querySelector('.close');
const navItems = document.querySelectorAll('.menu-list ul li');

const showMenu = () => {
  bars.style.display = 'none';
  close.style.transform = 'translateY(0)';
  list.style.transform = 'translateY(0)';
};
const hideMenu = () => {
  list.style.transform = 'translateX(-100%)';
  bars.style.display = 'block';
  close.style.transform = 'translateX(-25rem)';
};

bars.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
navItems.forEach((item) => {
  item.addEventListener('click', hideMenu);
});
const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 2,
    title: 'Professional Art Printing Data',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 3,
    title: 'Human Resource Analysis',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>Digital marketing, also called online marketing, is the promotion of brands to connect with potential customers using the internet and other forms of digital communication.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 5,
    title: 'Graphic Design',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 6,
    title: 'Building Design and Construction',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
  {
    id: 7,
    title: 'Professional Art Printing Data',
    image: 'PImages/Snapshoot_Portfolio.png',
    description1: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry\'s standard.</p>',

    description2: '<p>A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>',
    technologyList: ['Html', 'Ruby on Rails', 'Javascript'],
    live: 'https://zuwairanajma.github.io/Portfolio-Projects/',
    source: 'https://github.com/Zuwairanajma/Portfolio-Projects',
  },
];

projects.forEach((project) => {
  document.getElementById('mymodal').innerHTML = `<div class="project-details-popup">
  <div class="project-details-inner">
      <div class="project-details-header">
          <div class="pop-head">
              <h3 class="popup-heading">${project.title}</h3>
              <i id="close-icon-detail" alt="icon"></i>
          </div>
          <div>
            <ul class="techList">
              <li>${project.technologyList[0]}</li>
              <li>${project.technologyList[1]}</li>
              <li>${project.technologyList[2]}</li>
            </ul>
          </div>
      </div>
      <div class="popup-content">
          <img src=${project.image} alt="Portfolio snapshot image">
          <div class="popup-lower">
              
              <p class="pp1">${project.description1}</p>
              <p class="pp1">${project.description2}</p>
              <div class="modal-buttons">
                  <div class="btn-details"><a target="_blank" href=${project.live}>See Live</a><i class="live-icon"></i></div>
                  <div class="btn-details"><a target="_blank" href=${project.source}>See Source</a><i class="source-icon"></i></div>
              </div>
          </div>
      </div>
  </div>
</div>
`;
});

window.onload = function load() {
  const dynamicSection = document.querySelector('.Dynamic-section');
  const section = document.createElement('div');
  section.setAttribute('class', 'my-recent');
  section.setAttribute('id', 'card-section');
  section.innerHTML = `
  <div id="recent-works_container" class="recent-works">
  <h2 id="my-work" class="my-work">My Recent Works</h2>
  <hr class="divider">
  </div>
  <div id="multip" class="multipost">
<img class = "placeholder" src="PImages/imgPlaceholder.png" alt="Placeholder Image">
<div class="post">
 <h2 id="multi" class="multi">Multi-Post Stories</h2>
  <p id="stories" class="stories">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p>
    <ul id="buttons1" class="buttonss1">
       <li class="css-stories">CSS</li>
       <li class="html-stories">HTML</li>
       <li class="boots-stories">Bootstrap</li>
       <li class="ruby-stories">Ruby</li>
    </ul>
    <button id="projects-1" class="seeproject">See project</button>
  </div>
</div>
  <div class="portfolio-cards">
<div class="cardworks" id="cards">
      <div class="card-image1" id="card-imageA"></div>
        <h3 class="card1">Professional Art Printing Data</h3>
        <p class="cardtext">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
      <ul  class = "card-button" id="cardlist0">
        <li class="btn btn-primary btn-lg">HTML</li>
        <li class="btn btn-primary btn-lg">Bootstrap</li>
        <li class="btn btn-primary btn-lg">Ruby</li></ul>
    <button id="projects-2" class ="projects">See project</button>  
    </div>
    <div class="cardworks1" id="cardsA">
          <div class="card-image2" id="card-imageB"></div>
           <h3 class="card1">Human Resource Analysis</h3>
           <p class="cardtext">Profesional Art Printing DataA daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>   
           <ul  class = "card-button" id="cardlist1">     
            <li class="btn btn-primary btn-lg">HTML</li>        
            <li class="btn btn-primary btn-lg">Bootstrap</li>        
            <li class="btn btn-primary btn-lg">Ruby</li>
          </ul>     
          <button id="projects-3" class = "projects">See project</button>      
         </div>     
         <div class="cardworks2" id="cardsB">                    
          <div class="card-image3" id="card-imageC"></div>             
          <h3 class="card1">Digital Marketing</h3>             
          <p class="cardtext">Profesional Art Printing DataA daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>           
          <ul  class = "card-button" id="cardlist2">             
            <li class="btn btn-primary btn-lg">HTML</li>                
            <li class="btn btn-primary btn-lg">Bootstrap</li>                
            <li class="btn btn-primary btn-lg">Ruby</li>
          </ul>             
          <button id="projects-4" class = "projects">See project</button>              
        </div>             
        <div class="cardworks3" id="cardsC">               
            <div class="card-image4" id="card-imageD"></div>          
             <h3 class="card1">Graphic Design</h3>           
             <p class="cardtext">Profesional Art Printing DataA daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>         
             <ul class = "card-button" id="cardlist3">           
              <li class="btn btn-primary btn-lg">HTML</li>              
              <li class="btn btn-primary btn-lg">Bootstrap</li>              
              <li class="btn btn-primary btn-lg">Ruby</li>
            </ul>           
              <button id="projects-5" class = "projects">See project</button>             
            </div>           
            <div class="cardworks4" id="cardsD">                              
            <div class="card-image5" id="card-imageE"></div>                   
            <h3 class="card1">Building Design & Construction</h3>                  
           <p class="cardtext">Profesional Art Printing DataA daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>  
         <ul class="card-button" id="cardlist4">
      <li class="btn btn-primary btn-lg">HTML</li>
      <li class="btn btn-primary btn-lg">Bootstrap</li>
      <li class="btn btn-primary btn-lg">Ruby</li>
    </ul>
   <button id="projects-6" class="projects">See project</button>  
   </div>
   <div class="cardworks5" id="cardsE">
   <div class="card-image6" id="card-imageF"></div>
    <h3 class="card1">Professional Art Printing Data</h3>
    <p class="cardtext">Profesional Art Printing DataA daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
  <ul class = "card-button" id="cardlist5">
        <li class="btn btn-primary btn-lg">HTML</li>
        <li class="btn btn-primary btn-lg">Bootstrap</li>
        <li class="btn btn-primary btn-lg">Ruby</li></ul>
    <button id="projects-7" class= "projects">See project</button>  
   </div>
  </div>
  `;
  dynamicSection.appendChild(section);

  const seeProjects = [];
  projects.forEach((project, index) => seeProjects.push(document.getElementById(`projects-${index + 1}`)));
  let id;
  seeProjects.forEach((el) => {
    el.addEventListener('click', (e) => {
      id = e.target.id;
      document.querySelector('.popup-heading').textContent = projects[id.slice(-1) - 1].title;

      document.querySelector('.project-details-popup').classList.toggle('show');
      document.getElementById('headline').scrollIntoView();
      document.querySelector('#close-icon-detail').classList.toggle('close-icon-detail');
      document.querySelector('.project-details-popup').classList.toggle('show');
    });
  });

  document.querySelector('#close-icon-detail').addEventListener('click', () => {
    document.querySelector('.project-details-popup').classList.toggle('show');
    document.querySelector('#close-icon-detail').classList.toggle('show');
    if (id === 'projects-1') {
      document.getElementById(id).focus();
    } else {
      const section = document.querySelector('#card-section');
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // const cardButton1 = document.getElementById('projects-3');
  // const ul1 = document.getElementById('cardlist1');
  // const cardButton2 = document.getElementById('projects-4');
  // const ul2 = document.getElementById('cardlist2');
  // const cardButton3 = document.getElementById('projects-5');
  // const ul3 = document.getElementById('cardlist3');
  // const cardButton4 = document.getElementById('projects-6');
  // const ul4 = document.getElementById('cardlist4');
  // const cardButton5 = document.getElementById('projects-7');
  // const ul5 = document.getElementById('cardlist5');
  // const cardDiv1 = document.querySelector('cardworks1');
  // const cardDiv2 = document.querySelector('cardworks2');
  // const cardDiv3 = document.querySelector('cardworks3');
  // const cardDiv4 = document.querySelector('.cardworks4');
  // const cardDiv5 = document.querySelector('.cardworks5');

  // const changeDefOver1 = () => {
  //   ul1.style.display = 'none';
  //   cardButton1.style.display = 'block';
  // };

  // const changeDefOut1 = () => {
  //   ul1.style.display = 'flex';
  //   cardButton1.style.display = 'none';
  // };

  // const changeDefOver2 = () => {
  //   ul2.style.display = 'none';
  //   cardButton2.style.display = 'block';
  // };

  // const changeDefOut2 = () => {
  //   ul2.style.display = 'flex';
  //   cardButton2.style.display = 'none';
  // };
  // const changeDefOver3 = () => {
  //   ul3.style.display = 'none';
  //   cardButton3.style.display = 'block';
  // };

  // const changeDefOut3 = () => {
  //   ul3.style.display = 'flex';
  //   cardButton3.style.display = 'none';
  // };
  // const changeDefOver4 = () => {
  //   ul4.style.display = 'none';
  //   cardButton4.style.display = 'block';
  // };

  // const changeDefOut4 = () => {
  //   ul4.style.display = 'flex';
  //   cardButton4.style.display = 'none';
  // };
  // const changeDefOver5 = () => {
  //   ul5.style.display = 'none';
  //   cardButton5.style.display = 'block';
  // };

  // const changeDefOut5 = () => {
  //   ul5.style.display = 'flex';
  //   cardButton5.style.display = 'none';
  // };
  // cardDiv1.addEventListener('mouseover', changeDefOver1);
  // cardDiv2.addEventListener('mouseover', changeDefOver2);
  // cardDiv3.addEventListener('mouseover', changeDefOver3);
  // cardDiv4.addEventListener('mouseover', changeDefOver4);
  // cardDiv5.addEventListener('mouseover', changeDefOver5);
  // cardDiv1.addEventListener('mouseout', changeDefOut1);
  // cardDiv2.addEventListener('mouseout', changeDefOut2);
  // cardDiv3.addEventListener('mouseout', changeDefOut3);
  // cardDiv4.addEventListener('mouseout', changeDefOut4);
  // cardDiv5.addEventListener('mouseout', changeDefOut5);
};