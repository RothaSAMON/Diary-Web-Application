import { footerData } from '../data/footer-data.js';


        const dataSources = {
            'card-data': footerData,
        };

        const CreateFooter = (footer) => {
            return `
            <footer>
                    ${footer.map((item) => `
                    ${item.iconsvg}
                    <p>${item.copyright} <span id="current-year"></span> <span>${item.name}</span></p>
                    `).join('')}
            </footer>
            `;
        };

        class Footer extends HTMLElement {
            connectedCallback() {
                const dataSource = this.getAttribute('data-source');
                const data = dataSources[dataSource] || footerData; // Default to footerData if no attribute is found
                this.innerHTML = CreateFooter(data);
            }
        }

        customElements.define('footer-component', Footer);