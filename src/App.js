import React, { memo } from 'react'
// import { renderRoutes } from 'react-router-config'; // react-router v6不再支持使用Switch，所以不能使用了

import routes from './router';


import WYYMusicHeader from 'components/app-header';
import WYYMusicFooter from 'components/app-footer';
import { BrowserRouter, useRoutes } from 'react-router-dom';
// 渲染路由
function RouteElement() {
  const element = useRoutes(routes)
  return element
}
const App = memo(() => {
  return (
    <BrowserRouter>
      <WYYMusicHeader />
      {/* {renderRoutes(routes)} */}
      <RouteElement />
      <WYYMusicFooter />
    </BrowserRouter>
  )
})

export default App