'use client'

import { GlobalStyle } from '@/styles/GlobalStyle'
import StyledComponentsRegistry from '../lib/registry'
import { ThemeProvider } from 'styled-components'
import { theme } from '@/styles/theme'
import { Provider, useSelector } from 'react-redux'
import store, { RootState } from '@/redux/store'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ReduxLayout>
        {children}
      </ReduxLayout>
    </Provider>
  )
}

function ReduxLayout({ children }: { children: React.ReactNode }) {
  const isOpen = useSelector((state: RootState) => state.confirmOrderModal.isOpen)
  return (
    <StyledComponentsRegistry>
      <html lang='pt-br'>
        <ThemeProvider theme={theme}>
          <body>
            <GlobalStyle $isOpen={isOpen} />
            {children}
          </body>
        </ThemeProvider>
      </html>
    </StyledComponentsRegistry>
  )
}