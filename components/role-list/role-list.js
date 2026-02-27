class RoleList extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute("title") || "";
      const items = (this.getAttribute("items") || "")
        .split("|")
        .map(i => i.trim())
        .filter(Boolean);

        const isDesktop =  window.matchMedia ( "(min-width: 768px)" ).matches;

        if (!isDesktop) {
            this.innerHTML = `
            <div class="c-grey wraper-ul">
              <h3 class="bold normal-text m-0">${title}</h3>
              <ul class="normal-text light mt-05">
                ${items.map(i => `<li class="mb-05">${i}</li>`).join("")}
              </ul>
            </div>
          `;
        }
        else {
            this.innerHTML = `
            <div class="c-grey wraper-ul">
              <h3 class="bold medium-text m-0">${title}</h3>
              <ul class="medium-text light mt-05">
                ${items.map(i => `<li class="mb-05">${i}</li>`).join("")}
              </ul>
            </div>
          `;
        }
    }
  }
  customElements.define("role-list", RoleList);