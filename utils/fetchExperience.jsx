
export const fetchExperience = async () => {
  const res = await fetch(
    `https://sharull.xyz/api/getExperience`
  );
  const data = await res.json();
  const experiences = data.experiences;

  return experiences;
};
