

export const fetchSkills = async() => {
    const res  = await fetch(`https://sharull.xyz/api/getSkills`)
    const data = await res.json()
    const skills = data.skills

    console.log(skills);

    return skills
}