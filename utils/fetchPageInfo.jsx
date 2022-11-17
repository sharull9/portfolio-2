

export const fetchPageInfo = async() => {
    const res  = await fetch(`https://sharull.xyz/api/getPageInfo`)
    const data = await res.json()
    const pageInfo = data.pageInfo

    console.log(pageInfo);

    return pageInfo
}