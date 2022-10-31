import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="sidebar__color">
      <div className="wrap">
        <div className="sidebar__item red"></div>
        <div className="sidebar__item text">Red</div>
      </div>
      <div className="sidebar__quantity"></div>
    </div>
    <div className="sidebar__color">
      <div className="wrap">
        <div className="sidebar__item blue"></div>
        <div className="sidebar__item text">Blue</div>
      </div>
      <div className="sidebar__quantity">3</div>
    </div>
    <div className="sidebar__color">
      <div className="wrap">
        <div className="sidebar__item white"></div>
        <div className="sidebar__item text">Gray</div>
      </div>
      <div className="sidebar__quantity">4</div>
    </div>
  </div>
  )
}

export default Sidebar