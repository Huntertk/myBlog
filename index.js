let dataArray = [
    {
        heading: 'Code Hunting',
        article: 'This Project Build on Jan 19 2023 for Learning Purpose. This Project helps me to learn new skills. it was a great experience to build this website',
        link : 'https://dynamic-blancmange-e28341.netlify.app',
        img : '/images/onepost.jpg',
        date : 'Jan 19, 2023'
    },
    {
        heading: 'Imperial Spice',
        article: 'This Project Build on Jan 14 2023 for Learning Purpose. This Project is based real time food odering app. ',
        link : 'https://friendly-strudel-90a780.netlify.app',
        img : '/images/twopost.jpg',
        date : 'Jan 14, 2023'
    }
]

function getData(){
    let postData = ``
    dataArray.forEach(function(item){
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


function renderPost(){
    document.getElementById('renderPost').innerHTML = getData()
}
renderPost()