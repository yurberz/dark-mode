import { ThemeProvider } from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import usePersistedThemeHook from "./hooks/persistedTheme";
import GlobalStyles from "./themes/GlobalStyles";
import dark from "./themes/dark";
import light from "./themes/light";

const App = () => {
  const [theme, setTheme] = usePersistedThemeHook("modeTheme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const icon = theme.title === "light" ? <HiMoon size={50} /> : <CgSun size={50} />;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="container">
        <div className="wrapper">
          <button className="toggle-button" onClick={toggleTheme}>
            {icon}
          </button>
          <h1>DarkMode Kung-Fu</h1>
          <span>"To Infinity and Beyond!"</span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
