import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    status: {
      neutral: '#E63946',
    },
    palette: {
        primary: {
            main: '#F1FAEE',
            light: '#FDFFFD',
        },
        secondary: {
            main: '#A8DADC',
            dark: '#1D3557',
        },
        info: {
            main: '#E63946'
        },
        background: {
            default: '#F4FDF1'
        }
    }
})

export default theme;