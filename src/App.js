import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './sreens/main';
import Lenta from './sreens/lenta';
import Chat from './sreens/chat';
import Profile from './sreens/profile';
import Search from './sreens/search';
import Setting from './sreens/setting';
import Notif from './sreens/notif';
import Post from './sreens/post';
import Setpro from './sreens/settingprofile';
import Public1 from './sreens/public1';
import Userprofile from './sreens/userprofile';
import Story from './sreens/story';
import Subs from './sreens/subs';
import Chats from './sreens/chats';
import Follow from './sreens/follow';
import Userfollow from './sreens/userfollow';
import Usersub from './sreens/usersubs';
import 'antd/dist/antd.css';
import Regis from './sreens/registration';
import Regist from './sreens/registrationp';
import Buton from './sreens/button';

function App() {
  return (
    <div className='container'>
      <div className='row'>
      <div className='col-md-1'></div>
      <div className='col-md-10'> <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/lenta' element={<Lenta />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/search' element={<Search />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/notif' element={<Notif />} />
          <Route path='/post' element={<Post />} />
          <Route path='/settingprofile' element={<Setpro />} />
          <Route path='/public1/:id' element={<Public1 />} />
          <Route path='/userprofile/:id' element={<Userprofile />} />
          <Route path='/story/:id' element={<Story />} />
          <Route path='/subs' element={<Subs />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/follow' element={<Follow />} />
          <Route path='/userfollow/:nurik' element={<Userfollow />} />
          <Route path='/usersub/:id' element={<Usersub/>}/>
          <Route path='/registration' element={<Regis/>}/>
          <Route path='/registrationp' element={<Regist/>}/>
          <Route path='/button' element={<Buton/>}/>
        </Routes>
      </BrowserRouter></div>
      <div className='col-md-1'></div>
      </div>
    </div>
  );
}

export default App;
