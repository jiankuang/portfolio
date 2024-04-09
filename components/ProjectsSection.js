export class ProjectsSection extends HTMLElement {
    constructor() {
        super()
        // this.root = this.attachShadow({mode: "open"})
        // const styles = document.createElement("style")
        // this.root.appendChild(styles)
        
        // async function loadCSS() {
        //     const request = await fetch("/components/ProjectsSection.css")
        //     const css = await request.text()
        //     styles.textContent = css
        // }
        // loadCSS()
    }

    // when the component is attached to the DOM 
    connectedCallback() {
        const template = document.getElementById("projects-section-template")
        const content = template.content.cloneNode(true)
        this.appendChild(content)

        window.addEventListener("appprojectschange", () => {
            this.render()
        })
    }

    render() {
        if (app.store.projects) {
            this.querySelector("#projects").innerHTML = ""
            for (let project of app.store.projects.slice(1)) {
                const item = document.createElement("project-item")
                item.dataset.project = JSON.stringify(project)

                this.querySelector("#projects").appendChild(item)
            }
        } else {
            this.querySelector("#projects").innerHTML = "Loading ..."
        }
    }
}
customElements.define("projects-section", ProjectsSection)