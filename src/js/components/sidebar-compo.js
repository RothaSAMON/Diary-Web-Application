import { sidebarData } from '../data/sidebar-data.js';

const dataSources = {
    'card-data': sidebarData,
};

const CreateSidebar = (sidebar) => {
    return `
    <section class="sidebar-container">
        <div class="main-logo-sidebar">
            <img src="/Diary-Web-Application/src/images/logo-image.png" alt="logo">
            <a class="logo-sidebar-text" href="/index.html">SORSE | DIARY</a>
        </div>
        <ul class="list-sidebar">
            ${sidebar.map((item, index) => `
            <li class="list-menu-sidebar ${item.class}" data-index="${index}">
                <img src="${item.img}" alt="icon">
                <a href="${item.link}">${item.title}</a>
                <span ${item.classIcon} data-index="${index}">${item.icon}</span>
            </li>
            <ul class="dropdown-list" id="dropdown-${index}">
                <li><a href="https://www.notion.so/Third-Mission-Diary-Web-Application-b124c5f5f3f24a008b86a539840ab98f" target="_blank">Documentation</a></li>
                <li>
                    <p>Contact Me :</p>
                    <div id="sub-list-sidebar">
                        <a href="https://www.instagram.com/smeryoung__/" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/samon-rotha-034534316/" target="_blank">Linkedin</a>
                    </div>
                </li>
            </ul>
            `).join('')}
        </ul>
    </section>
    `;
};

class Sidebar extends HTMLElement {
    connectedCallback() {
        const dataSource = this.getAttribute('data-source');
        const data = dataSources[dataSource] || sidebarData; // Default to sidebarData if no attribute is found
        this.innerHTML = CreateSidebar(data);
        this.addEventListeners(); // Add event listeners after rendering
    }

    addEventListeners() {
        const toggleIcons = this.querySelectorAll('.toggle-icon');
        toggleIcons.forEach(icon => {
            icon.addEventListener('click', (event) => {
                const index = icon.getAttribute('data-index');
                const dropdown = this.querySelector(`#dropdown-${index}`);
                dropdown.classList.toggle('open');
                icon.classList.toggle('rotate');
                event.stopPropagation(); // Prevents the click event from triggering other elements
            });
        });

        const listItems = this.querySelectorAll('.dropdown-header');
        listItems.forEach(item => {
            item.addEventListener('click', () => {
                const index = item.getAttribute('data-index');
                const dropdown = this.querySelector(`#dropdown-${index}`);
                dropdown.classList.toggle('open');
                const icon = this.querySelector(`.toggle-icon[data-index="${index}"]`);
                icon.classList.toggle('rotate');
            });
        });
    }
}

customElements.define('sidebar-component', Sidebar);
