import { MainMenu } from '../pages/menu/main-menu'
import { GameTable } from '../pages/game/table/game-table'
import { Route, Switch } from 'react-router'
import { SettingsPage } from '../pages/settings/settings-page'
import { LobbySelectPage } from '../pages/game/lobby-select/lobby-select'
import { LobbyPage } from '../pages/game/lobby/lobby'
import { AuthProvider } from '../../context/auth-context'
import PrivateRoute from '../../auth/private-route'
import Login from '../pages/auth/login'
import Signup from '../pages/auth/signup'
import { Profile } from '../pages/profile/Profile'

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route path={'/'} exact component={MainMenu} />
          <PrivateRoute path={'/game/table'} exact component={GameTable} />
          <PrivateRoute path={'/settings'} exact component={SettingsPage} />
          <PrivateRoute path={'/profile'} exact component={Profile} />
          <Route path={'/game/lobby-select'} exact component={LobbySelectPage} />
          <Route path={'/game/lobby'} exact component={LobbyPage} />
          <Route path={'/login'} exact component={Login} />
          <Route path={'/signup'} exact component={Signup} />
        </Switch>
      </AuthProvider>
    </>
  )
}
