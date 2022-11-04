import logo from './logo.svg';
import './App.css';

import UserPro from './Login/UserPro';
import UserWork from './Login/UserWork';
import UserWorkR from './Login/UserWorkR';
import Navbar from './pages/Navbar';
import UserProGm from './userInterface/UserProGm';
import AttachedFile from './userInterface/AttachedFile';
import CostList from './userInterface/CostList';
import Card from './userInterface/Card';
import Cart from './Buyer/Cart';
import Home from './Login/Home';
import CardWithText from './Buyer/CardWithText';
import CompanyPerson from './Buyer/CompanyPerson';
import TextWithImg from './Buyer/TextWithImg';
import TextWithText from './Buyer/TextWithText';
import Chat from './Buyer/Chat';

function App() {
  return (<>
  <UserPro/>
<UserWork/>
<Navbar/>
<UserWorkR/>
<UserProGm/>
<AttachedFile/>
<CostList/>
<Card/>
<CardWithText/>
<Cart/>
<Chat/>
<TextWithText/>
<TextWithImg/>
<CompanyPerson/>

<Home/>
</>
  );
}

export default App;
