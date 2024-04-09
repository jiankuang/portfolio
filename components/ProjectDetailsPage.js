import { getProjectById } from "../services/Projects.js"

export class ProjectDetailsPage extends HTMLElement {
    constructor() {
        super()

        // this.root = this.attachShadow({mode: "open"})
        
    }

    async renderData() {
        if(this.dataset.projectId) {
            this.project = await getProjectById(this.dataset.projectId)
            this.querySelector("h2").textContent = this.project.name
            this.querySelector("img").src = `/data/images/${this.project.image}`
            this.querySelector(".description").textContent = this.project.description
        } else {
            alert("Invalid Project ID")
        }
    }

    connectedCallback() {
        const template = document.getElementById("project-details-page-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content)

        this.renderData()
    }
}
customElements.define("project-details-page", ProjectDetailsPage)