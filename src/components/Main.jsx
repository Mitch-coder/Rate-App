import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar.jsx'
import { Route,  Routes, } from "react-router-native"
import LoginForm from './SignInForm.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
    <AppBar />
    <Routes>
    <Route exact path="/" element={<RepositoryList/>} />
    <Route exact path="/signin" element={<LoginForm/>} />
    </Routes>
    </View>
  )
}


{/* <AppBar />
<Switch>
      <Route path='/' exact>
          <RepositoryList />
      </Route>
      <Route path='/signin' exact>
          <Text>Working on it</Text>
      </Route>
    <Redirect to='/' />
</Switch> */}

export default Main