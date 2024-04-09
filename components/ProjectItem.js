export default class ProjectItem extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const template = document.getElementById("project-item-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content)

        const project = JSON.parse(this.dataset.project)
        this.querySelector("h3").textContent = project.name
        this.querySelector("img").alt = project.name
        this.querySelector("img").src = `data/images/${project.image}`
        this.querySelectorAll("a").forEach(a => {
            a.href = project.url
        }) 
        // this.querySelector("a").addEventListener("click", event => {
        //     console.log(event.target.tagName)
        //     if (event.target.tagName.toLowerCase() === "button") {
        //         // TODO
        //     } else {
        //         app.router.go(`/project-${project.id}`)
        //     }
        //     event.preventDefault()
        // })
    }
}

customElements.define("project-item", ProjectItem)