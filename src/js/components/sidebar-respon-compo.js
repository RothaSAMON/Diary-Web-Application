import { sideResData } from '../data/sidebar-respon-data.js';


        const dataSources = {
            'card-data': sideResData,
        };

        const CreateSideRes = (sideRes) => {
            return `
            <section class="sidebar-respon">
                <ul class="list-menu-sidebar-respon">
                    ${sideRes.map((item) => `
                    <li class="list-submenu-sidebar-respon">
                        <img src="${item.img}" alt="icon">
                        <a href="${item.link}">${item.title}</a>
                    </li>
                    `).join('')}
                </ul>
            </section>
            `;
        };

        class SideRes extends HTMLElement {
            connectedCallback() {
                const dataSource = this.getAttribute('data-source');
                const data = dataSources[dataSource] || sideResData; // Default to sideResData if no attribute is found
                this.innerHTML = CreateSideRes(data);
            }
        }

        customElements.define('sidebar-respon-component', SideRes);