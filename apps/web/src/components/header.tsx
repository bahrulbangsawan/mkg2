import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="border-b px-4 py-3">
      <nav className="flex items-center gap-4">
        <Link className="font-semibold" to="/">
          mkg2
        </Link>
      </nav>
    </header>
  );
}
