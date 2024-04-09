export class FeaturedProjectSection extends HTMLElement {
    constructor() {
        super()
        // this.root = this.attachShadow({mode: "open"})
        // const styles = document.createElement("style")
        // this.root.appendChild(styles)

        // async function loadCSS() {
        //     const request = await fetch("/components/FeaturedProjectSection.css")
        //     const css = await request.text()
        //     styles.textContent = css
        // }
        // loadCSS()
    }

    connectedCallback() {
        const template = document.getElementById("featured-project-section-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}
customElements.define("featured-project-section", FeaturedProjectSection)