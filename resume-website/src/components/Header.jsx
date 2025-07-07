function Header() {
  return (
    <header className="bg-gray-100 dark:bg-gray-800 p-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">Cody Zhang</h1>
      <a href="/resume.pdf" download className="text-blue-500 hover:underline">
        Download Resume
      </a>
    </header>
  );
}

export default Header;