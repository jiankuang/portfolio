const API = {
    url: "/data/projects.json",
    fetchProjects: async () => {
        const result = await fetch(API.url)
        return await result.json()
    }
}

export default API