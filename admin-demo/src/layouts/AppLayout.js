import { defaultTheme, Layout, AppBar, ToggleThemeButton, TitlePortal } from 'react-admin';
  import { createTheme } from '@mui/material';
  
const darkTheme = createTheme({
    palette: { mode: 'dark' },
});
  
const CustomAppBar = () => (
    <AppBar>
      <TitlePortal />
      <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
    </AppBar>
);

export const AppLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;
