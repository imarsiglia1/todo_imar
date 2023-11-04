import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useColorScheme } from "../../hooks/useColorScheme";

const DarkModeToggle = () => {
  const { isDark, setIsDark } = useColorScheme();

  return (
    <DarkModeSwitch
      style={{ marginBottom: "2rem" }}
      checked={isDark}
      onChange={(checked) => setIsDark(checked)}
      size={50}
    />
  );
};

export default DarkModeToggle;
