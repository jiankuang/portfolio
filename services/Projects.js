import API from "./API.js"

export async function loadData() {
    app.store.projects = await API.fetchProjects()
}

export async function getProjectById(id) {
    if (app.store.projects == null) {
        await loadData()
    }
    for (let project of app.store.projects) {
        if(project.id == id) {
            return project
        }
    }
    return null
}