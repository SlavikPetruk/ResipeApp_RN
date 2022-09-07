import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, News, Bookmarks } from './index'

import { COLORS, icons } from '../constants'
import TabIcon from '../components/TabIcon'


const tabs = [
  {id: 1, name: 'Home', component: Home, icon: icons.home },
  {id: 2,  name: 'News', component: News, icon: icons.news },
  {id: 3,  name: 'Search', component: Home, icon: icons.search },
  {id: 4,  name: 'Bookmarks', component: Bookmarks, icon: icons.bookmark },
  {id: 5,  name: 'Settings', component: Home, icon: icons.settings },
]

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: 100,
        },
      }}>
      {tabs.map(item => (
        <Tab.Screen
          name={item.name}
          key={item.id}
          component={item.component}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={item.icon} />,
          }}
        />
      ))}
    </Tab.Navigator>
  )
}

export default Tabs
