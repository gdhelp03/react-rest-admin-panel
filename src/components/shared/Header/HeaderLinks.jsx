import React from 'react'
import './HeaderLinks.styl'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { dashboardRoutes } from '../../../router/routes'

const HeaderLinks = ({ user, rootStore }) =>
  user ? (
    <div className="header-links">
      <span>
        WELCOME <strong>{user.name.toUpperCase()}.</strong>
      </span>
      <Link
        className="header-links__change-password"
        to={dashboardRoutes.changePassword.path}
      >
        CHANGE PASSWORD
      </Link>
      <button type="button" onClick={rootStore.logOut}>
        / LOG OUT
      </button>
    </div>
  ) : null

export default inject('rootStore')(observer(HeaderLinks))
