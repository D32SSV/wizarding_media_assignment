type UserProp = {
  name: string;
};

const WelcomeUser = ({ name }: UserProp) => {
  return <p className="font-jockey text-2xl">Welcome {name || "Name"}</p>;
};

export default WelcomeUser;
