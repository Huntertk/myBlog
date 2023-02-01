let dataArrayForHomePage = [
    {
        heading: 'Code Hunting',
        article: 'This Project Build on Jan 19 2023 for Learning Purpose. This Project helps me to learn new skills. it was a great experience to build this website',
        link : 'https://dynamic-blancmange-e28341.netlify.app',
        img : '/images/onepost.jpg',
        date : 'Jan 19, 2023'
    },
    {
        heading: 'Imperial Spice',
        article: 'This Project Build on Jan 4 2023 for Learning Purpose. This Project is based real time food odering app. ',
        link : 'https://friendly-strudel-90a780.netlify.app',
        img : '/images/twopost.jpg',
        date : 'Jan 4, 2023'
    },
    {
        heading: 'Maldives',
        article: 'This Project Build on Jan 14 2023 for Learning Purpose. This Project is based on Maldives hotels and resort booking webpage. ',
        link : 'https://aquamarine-donut-b721d1.netlify.app',
        img : '/images/threepost.jpg',
        date : 'Jan 14, 2023'
    },
    {
        heading: 'Twitter Clone',
        article: 'This Project Build on Jan 12 2023 for Learning Purpose. This Project is based on Twitter Clone and Here You can Tweet and like and retweet. ',
        link : 'https://cheery-maamoul-cee993.netlify.app',
        img : '/images/fourpost.jpg',
        date : 'Jan 12, 2023'
    }
]

function getRecentData(){
    let postData = ``
    dataArrayForHomePage.forEach(function(item){
        postData += `
        <section id="second" class="section-two">
                <div class="primary-post-item">
                        <h2 class="post-heading">${item.heading}</h2>
                        <p class="article-body">${item.article}</p>
                        <a href="${item.link}" target="_blank" class="post-link">Visit Website</a>
                    </div>
                    <div class="secondary-post-item">
                        <img src="${item.img}" alt="postoneimage" class="post-image">
                        <p class="article-info">${item.date}</p>
                    </div>
        </section>
        `
    })
    return postData
}

const closeButton = document.querySelector('.close-nav');
const openButton = document.querySelector('.open-nav');
const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 


function renderPost(){
    document.getElementById('renderPost').innerHTML = getRecentData()
    
}
renderPost()