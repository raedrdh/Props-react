import './App.css'
import MenuAppBar from './navbar/navbar'
import NestedList from './navmenu/navmenu'
import Profile from './profile/profile'

function App() {
  return (
    <div className ='flex1'>
    <MenuAppBar></MenuAppBar>
    <div className ='flex2'>
    <NestedList></NestedList>
    <Profile></Profile>
    </div>
</div>    
  );
}

export default App;
