import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './screens/Login'
import Recipe from './screens/Recipe'
import SingUp from './screens/SingUp'
import News from './screens/News'
import { Tabs } from './screens/tabs'
import { PostNews } from './screens'
import Profile from './screens/Profile'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={'Login'}>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Recipe" component={Recipe} />
        <Stack.Screen name="SingUp" component={SingUp} />
        <Stack.Screen name="PostNews" component={PostNews} />
        <Stack.Screen name="Profile" component={Profile} />

      
      </Stack.Navigator>
    </NavigationContainer>
  )
}