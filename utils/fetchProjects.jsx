

export const fetchProjects = async() => {
    const res  = await fetch(`https://sharull.xyz/api/getProjects`)
    const data = await res.json()
    const projects = data.projects

    console.log(projects);

    return projects
}