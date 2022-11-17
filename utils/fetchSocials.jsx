
export const fetchSocials = async() => {
    const res  = await fetch(`https://sharull.xyz/api/getSocials`)
    const data = await res.json()
    const socials = data.socials

    console.log(socials);

    return socials
}