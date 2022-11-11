import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import 'react-native-gesture-handler';
import Login from "./src/navegation/Login";
import { Home } from "./src/navegation/Home";










const Menu = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Menu.Navigator>
          <Menu.Screen name="Login" component={Login}/>
          <Menu.Screen name="Home" component={Home}/>
        </Menu.Navigator>
      </NavigationContainer>
  );
}

