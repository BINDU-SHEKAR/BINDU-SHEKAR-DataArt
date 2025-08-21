interface HeaderProps {
  toggleTheme: () => void;
}

const Header = ({ toggleTheme }: HeaderProps) => (
  <header>
    <figure>
      <img src="/mylogo.png" alt="Timeline logo" />
      <figcaption>My Timeline</figcaption>
    </figure>
    <button onClick={toggleTheme}>Toggle Theme</button>
  </header>
);

export default Header;
