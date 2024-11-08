{
  // Problem 6

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  function updateProfile(profile: Profile, update: Partial<Profile>): Profile {
    return { ...profile, ...update };
  }

  const myProfile = {
    name: "Abdullah",
    age: 25,
    email: "bdmamun100@gmail.com",
  };

  const result = updateProfile(myProfile, { age: 26 });
  console.log(result);
}
