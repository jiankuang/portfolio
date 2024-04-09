const Store = {
    projects: []
}

const proxiedStore = new Proxy(Store, {
    set(target, property, value) {
        target[property] = value
        if (property === "projects") {
            window.dispatchEvent(new Event("appprojectschange"))
        }
        return true
    }

})

export default proxiedStore