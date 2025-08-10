import React from "react";

type Theme = "light" | "dark";


interface ThemeContextProps {
  theme: Theme,
  openErrorModal: boolean,
  toggleOpenErrorModal: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme] = React.useState<Theme>('dark');
  const [openErrorModal, setOpenErrorModal] = React.useState(false);

  function toggleOpenErrorModal() {
    setOpenErrorModal(prevState => !prevState)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        openErrorModal,
        toggleOpenErrorModal
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};