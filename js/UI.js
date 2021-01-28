import pages from './pages.js';
const section = document.querySelector('#container > section');

export default class UI {
    render(page) {
        let returnedPage = this.findPage(page);
        section.innerHTML = returnedPage.html;

        document.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', e => {
                let page = e.target.innerText.match(/^\s*([a-zA-Z0-9]+)/g)[0].toLowerCase();
                this.render(page);
        
                e.preventDefault();
            });
        });

        let galery = document.querySelector('.galery');
        let logo = document.querySelector('.logo');

        if (galery) {
            galery.addEventListener('click', e => {
                this.render("galery");

                e.preventDefault();
            });
        }

        if (logo) {
            logo.addEventListener('click', e => {
                this.render("homepage");

                e.preventDefault();
            });
        }
    }
    
    findPage(page) {
        return pages.find(e => e.name === page);
    }
}