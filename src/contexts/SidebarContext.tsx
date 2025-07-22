import React from "react";
import { useThemeContext } from "./ThemeContext";

interface SidebarContextProps {
  openMenu: boolean,
  toogleOpenMenu: () => void,
}

export const SidebarContext = React.createContext<SidebarContextProps>({
  openMenu: true,
  toogleOpenMenu: () => {},
});

export const SidebarProvider = ({ children }: React.PropsWithChildren) => {
  const { theme } = useThemeContext();
  console.log("theme:" , theme)
  const [openMenu, setOpenMenu] = React.useState(true);

  function toogleOpenMenu() {
    setOpenMenu(prevState => !prevState);
  }

  return (
    <SidebarContext.Provider
      value={{
        openMenu,
        toogleOpenMenu
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }
  return context;
};