import ToggleColorMode from "./toggleColorMode";

export default function Header() {
  return (
    <header className="flex items-center py-6 px-6">
      <div className="flex items-baseline mr-auto">
        <p className="text-2xl mr-2">rew</p>
        <span className="text-muted-foreground text-sm">
          frontend developer
        </span>
      </div>
      <ToggleColorMode />
    </header>
  );
}
