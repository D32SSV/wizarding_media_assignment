type UserProp = {
  name: string;
};

const WelcomeUser = ({ name }: UserProp) => {
  return <p className="font-jockey text-2xl mb-8">Welcome {name || "Name"}</p>;
};

export default WelcomeUser;
