import {AppProps} from 'next/app'
import { ThemeProvider } from 'styled-components'
import Global from '../styles/Global'
import theme from '../styles/theme'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return(
     <ThemeProvider theme={theme}>
        <Global/>
        <Component {...pageProps }/>
    </ThemeProvider>
    )
}

export default MyApp
