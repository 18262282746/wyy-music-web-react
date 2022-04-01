import React, { memo } from 'react'

import { Input, Button } from 'antd'
import { NavLink } from 'react-router-dom'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
import { SearchOutlined } from '@ant-design/icons'

const WYYMusicHeader = memo(() => {
  const showSlectItem = (item, index) => {
    if(index===3 || index===4) {
      return <a href={item.link}>{item.title}</a>
    } else {
      return (
      <NavLink to={item.link}>
        {item.title}
        <i className='cor'></i>
      </NavLink>)
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="/#" className='logo sprite_01'> </a>
          <div className="select-list">
            {headerLinks.map((item,index) => (
              <div className="select-item" key={item.title}>
                {showSlectItem(item, index)}
              </div>
            ))}
          </div>
          {/* <NavLink to="/">发现音乐</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
          <NavLink to="/friend">关注</NavLink> */}
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" prefix={<SearchOutlined />} placeholder="音乐/视频/电台/用户" />
          <a href='#/' className='create-center'>创作者中心</a>
          <a href="#/">登录</a>
        </HeaderRight>
      </div>
      <div className="divider">

      </div>
    </HeaderWrapper>
  )
})

export default WYYMusicHeader