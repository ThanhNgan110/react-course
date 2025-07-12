import React from "react";

type Theme = "light" | "dark";


interface ThemeContextProps {
  theme: Theme
}

export const ThemeContext = React.createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [theme] = React.useState<Theme>('dark')
  return (
    <ThemeContext.Provider
      value={{
        theme
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