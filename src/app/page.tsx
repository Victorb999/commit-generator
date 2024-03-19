import { MainForm } from "../components/MainForm/MainForm";
import { ToggleTheme } from "../components/ToggleTheme/ToggleTheme";

export default function Home() {
  return (
    <div>
      <div className="absolute top-4 right-4">
        <ToggleTheme />
      </div>
      <MainForm />
    </div>
  );
}
