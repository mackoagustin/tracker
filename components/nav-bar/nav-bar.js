class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <section class="header-mobile">
            <article class="p-vertical-small p-horizontal-small container-sb b-b">
                <object type="image/svg+xml" data="assets/icons/tracker_logo_icon.svg" width="40" height="40"></object>
                <img id="menu-icon" src="assets/icons/acordion_menu.svg" width="32" height="32" alt="Menu">
            </article>
        </section>
    
        <section class="header-desktop">
            <article class="p-vertical-small p-horizontal-small b-b"> 
                <div class="container-carac-space">
                    <img src="assets/images/logo_webpng.png" alt="Logo tracker">
                    <div class="container-sb-gap16">
                        <custom-button type="outline width-f" text="Iniciar sesión"  href="https://web.tracker-realestate.com/login"></custom-button>
                        <custom-button type="fill width-f" text="Solicitar plan" href="https://web.tracker-realestate.com/subscription"></custom-button>
                    </div>
                </div>
            </article>
        </section>
    
        <!-- Menú móvil oculto -->
        <div id="mobile-menu" class="menu-mobile">
            <section class="header-mobile">
                <article class="p-vertical-small p-horizontal-small container-sb b-b ">
                    <object type="image/svg+xml" data="assets/icons/tracker_logo_icon.svg" width="40" height="40"></object>
                    <img  id="close-menu" src="assets/icons/close.png" width="32" height="32" alt="Close menu">
                </article>
            </section>
            <section style="padding: 250px 16px 0px 16px">
                <custom-button type="big-button fill width-f" text="Solicitar plan" href="https://web.tracker-realestate.com/subscription"></custom-button>
                <br>
                <custom-button type="big-button outline width-f" text="Iniciar sesión" href="https://web.tracker-realestate.com/login"></custom-button>
            </section>

            <section class="container-sb-gap16">
                <div class="container-cc pt-2 pb-2 social-net-bottom">
                    <a href="https://www.instagram.com/tracker.realestate?igsh=amNjdHI1NWQ0bTky" target="_blank" rel="noopener noreferrer">
                        <img src="assets/icons/instagram.svg" alt="Instagram">
                    </a>
                    <a href="https://www.linkedin.com/company/tracker-real-estate/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/icons/linkedin.svg" alt="LinkedIn" class="pl-2">
                    </a>
                </div>
            </section>
           
        </div>
        `;
        const menuIcon = this.querySelector("#menu-icon");
        const mobileMenu = this.querySelector("#mobile-menu");
        const closeMenu = this.querySelector("#close-menu");
    
        menuIcon.addEventListener("click", () => {
            mobileMenu.classList.add("active");
            document.body.classList.add("no-scroll"); // Bloquear scroll
        });
    
        closeMenu.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            document.body.classList.remove("no-scroll"); // Restaurar scroll
        });
    }
}

customElements.define("nav-bar", Navbar);
