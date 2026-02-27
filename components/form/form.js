class Form extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <form action="https://formspree.io/f/mjkyyppl" method="post" class="form-green-border pb-3">
                
                <div class="container-form-input">
                    <label for="nombre">Nombre y apellido</label>
                    <input type="text" id="nombre" name="nombre" required>
                    <span class="error-message" id="error-nombre"></span>
                </div>

                <div class="container-form-input">  
                    <label for="empresa">Inmobiliaria</label>
                    <input type="text" id="empresa" name="empresa" required>
                    <span class="error-message" id="error-empresa"></span>
                </div>

                <div class="container-form-input">
                    <label for="rol">Rol (Agente, Líder, Broker, Asistente)</label>
                    <input type="text" id="rol" name="rol" required>
                    <span class="error-message" id="error-rol"></span>
                </div>
                
                <div class="container-form-input">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                    <span class="error-message" id="error-email"></span>
                </div>
                
                <div class="container-form-input">
                    <label for="whatsapp">Telefono</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required>
                    <span class="error-message" id="error-whatsapp"></span>
                </div>

                <div class="container-form-input">
                    <label for="equipo">Cantidad de personas en el equipo</label>
                    <input type="tel" id="equipo" name="equipo" required>
                    <span class="error-message" id="error-equipo"></span>
                </div>
                
                <div style="margin-top: 24px">
                <custom-button id="submit-btn" type="fill width-f" text="Enviar" icon="arrow-tail.svg"></custom-button>
                </div>
            </form>

            <style>
                .error-message {
                    color: red;
                    font-size: 12px;
                    display: none; /* Inicialmente ocultos */
                    margin-top: 5px;
                }
                .input-error {
                    border: 1px solid red;
                }
            </style>
        `;
        this.addEventListener();
    }

    addEventListener() {
        const submitbutton = this.querySelector("#submit-btn");

        submitbutton.addEventListener("click", (event) => {
            this.validationForm();
        });
    }

    validationForm() {
        const nombre = this.querySelector("#nombre");
        const empresa = this.querySelector("#empresa");
        const rol = this.querySelector("#rol");
        const email = this.querySelector("#email");
        const whatsapp = this.querySelector("#whatsapp");
        const equipo = this.querySelector("#equipo");

        const errorNombre = this.querySelector("#error-nombre");
        const errorEmpresa = this.querySelector("#error-empresa");
        const errorRol = this.querySelector("#error-rol");
        const errorEmail = this.querySelector("#error-email");
        const errorWhatsapp = this.querySelector("#error-whatsapp");
        const errorEquipo = this.querySelector("#error-equipo");

        let isValid = true;

        // Validar nombre
        if (nombre.value.trim() === "") {
            errorNombre.textContent = "El nombre es obligatorio";
            errorNombre.style.display = "block"; 
            nombre.classList.add("input-error");
            isValid = false;
        } else {
            errorNombre.textContent = "";
            errorNombre.style.display = "none"; 
            nombre.classList.remove("input-error");
        }

        // Validar empresa
        if (empresa.value.trim() === "") {
            errorEmpresa.textContent = "La inmobiliaria es obligatoria";
            errorEmpresa.style.display = "block";
            empresa.classList.add("input-error");
            isValid = false;
        } else {
            errorEmpresa.textContent = "";
            errorEmpresa.style.display = "none";
            empresa.classList.remove("input-error");
        }

        // Validar rol
        if (rol.value.trim() === "") {
            errorRol.textContent = "El rol es obligatorio";
            errorRol.style.display = "block";
            rol.classList.add("input-error");
            isValid = false;
        } else {
            errorRol.textContent = "";
            errorRol.style.display = "none";
            rol.classList.remove("input-error");
        }

        // Validar email
        if (email.value.trim() === "") {
            errorEmail.textContent = "El email es obligatorio";
            errorEmail.style.display = "block";
            email.classList.add("input-error");
            isValid = false;
        } else if (!this.validateEmail(email.value)) {
            errorEmail.textContent = "El email no es válido";
            errorEmail.style.display = "block"; 
            email.classList.add("input-error");
            isValid = false;
        } else {
            errorEmail.textContent = "";
            errorEmail.style.display = "none"; 
            email.classList.remove("input-error");
        }

        // Validar WhatsApp
        const whatsappRegex = /^\+?[1-9]\d{7,14}$/;
        if (whatsapp.value.trim() === "") {
            errorWhatsapp.textContent = "El número de WhatsApp es obligatorio";
            errorWhatsapp.style.display = "block"; 
            whatsapp.classList.add("input-error");
            isValid = false;
        } else if (!whatsappRegex.test(whatsapp.value)) {
            errorWhatsapp.textContent = "El número de WhatsApp no es válido";
            errorWhatsapp.style.display = "block"; 
            whatsapp.classList.add("input-error");
            isValid = false;
        } else {
            errorWhatsapp.textContent = "";
            errorWhatsapp.style.display = "none";
            whatsapp.classList.remove("input-error");
        }

        // Validar equipo
        if (equipo.value.trim() === "") {
            errorEquipo.textContent = "La cantidad de personas es obligatoria";
            errorEquipo.style.display = "block";
            equipo.classList.add("input-error");
            isValid = false;
        } else {
            errorEquipo.textContent = "";
            errorEquipo.style.display = "none";
            equipo.classList.remove("input-error");
        }

        if (isValid) {
            alert("Formulario enviado correctamente 🎉");
            this.querySelector("form").submit();
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}
customElements.define("form-input", Form);