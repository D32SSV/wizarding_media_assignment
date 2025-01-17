type UserProp = {
  name?: string;
};

const WelcomeUser = ({ name = "Shaktimaan" }: UserProp) => {
  return <p className="font-jockey text-2xl mb-8">Welcome {name}</p>;
};

export default WelcomeUser;
