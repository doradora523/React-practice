import { ThemeProvider } from 'styled-components'
import TodoList from './components/TodoList'
// import Button from './components/Button/Button'
import theme from './styles/theme'
import GlobalStyle from './styles/globalStyle'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Button /> */}
      <TodoList />
    </ThemeProvider>
  )
}

export default App
