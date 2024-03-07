const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center">
        <span>LOGO</span>
        <ul className="flex gap-2">
          <li>Home</li>
          <li>Admin</li>
          <li>Contact</li>
          <li>Stock</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
