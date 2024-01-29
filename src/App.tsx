import React from 'react';
import './App.css';
import { App as F7app,View } from 'framework7-react';
import MyPage from './MyPage';
import DetailPage from './DetailPage';

const f7params = {
  // App Name
  name: "My App",
  // ...
  routes: [
    {
      path: "/",
      component: MyPage,
    },
    {
      path: "/main",
      component: DetailPage,
    },
  ],
};

function App() {
  return (
    <F7app {...f7params}>
      <View main url="/"/>
    </F7app>
  );
}

export default App;
