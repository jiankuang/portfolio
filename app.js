import Store from "./services/Store.js"
import { loadData } from "./services/Projects.js"
import Router from "./services/Router.js"

// Link my Web Components
import { FeaturedProjectSection } from "./components/FeaturedProjectSection.js"
import { ProjectsSection } from "./components/ProjectsSection.js"
import { ContactSection } from "./components/ContactSection.js"
import { ProjectDetailsPage } from "./components/ProjectDetailsPage.js"
import ProjectItem from "./components/ProjectItem.js"

window.app = {}
app.store = Store
app.router = Router

// It's better to wait for the event for DOM manipulation
window.addEventListener("DOMContentLoaded", async () => {
    loadData()
    app.router.init()
})
