export class ContactSection extends HTMLElement {
    constructor() {
        super()
        // this.root = this.attachShadow({mode: "open"})
        // const styles = document.createElement("style")
        // this.root.appendChild(styles)

        // async function loadCSS() {
        //     const request = await fetch("/components/ContactSection.css")
        //     const css = await request.text()
        //     styles.textContent = css
        // }
        // loadCSS()
    }

    connectedCallback() {
        const template = document.getElementById("contact-section-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}
customElements.define("contact-section", ContactSection)