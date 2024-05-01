
export default function Header() {
    return (
      <header className="h-24 bg-[#071619] flex items-center justify-between px-8">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <button className="bg-[#ffc000] px-4 py-2 rounded-3xl">Connect Wallet</button>
      </header>
    );
  }