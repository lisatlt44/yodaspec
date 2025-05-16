import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

function Providers ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
    >
      {children}
      <ToastContainer />
    </ThemeProvider>
  )
}

export default Providers
