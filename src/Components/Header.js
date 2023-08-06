import Logo from "../assets/logo.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" className="logo"/>
      <a href="/">Home</a>
    </header>
  );
};
