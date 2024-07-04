import { headerData } from '../data/header-title-data.js';


        const dataSources = {
            'card-data': headerData,
        };

        const CreateHeader = (header) => {
            return `
            <a href="/Diary-Web-Application/index.html" class="main-header-title">
                    ${header.map((item) => `
                    <h1>${item.defualt} <span>${item.orangetext}</span></h1>
                    `).join('')}
            </a>
            `;
        };

        class Header extends HTMLElement {
            connectedCallback() {
                const dataSource = this.getAttribute('data-source');
                const data = dataSources[dataSource] || headerData; // Default to headerData if no attribute is found
                this.innerHTML = CreateHeader(data);
            }
        }

        customElements.define('header-title-component', Header);