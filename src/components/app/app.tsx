import { MainMenu } from '../pages/menu/main-menu'
import { GameTable } from '../pages/game/table/game-table'
import { Route, Switch } from 'react-router'
import { SettingsPage } from '../pages/settings/settings-page'
import { LobbySelectPage } from '../pages/game/lobby-select/lobby-select'
import { LobbyPage } from '../pages/game/lobby/lobby'

export const App = () => {
  return (
    <>
      <Switch>
        <Route path={'/'} exact component={MainMenu} />
        <Route path={'/game/table'} exact component={GameTable} />
        <Route path={'/settings'} exact component={SettingsPage} />
        <Route path={'/game/lobby-select'} exact component={LobbySelectPage} />
        <Route path={'/game/lobby'} exact component={LobbyPage} />
      </Switch>
    </>
  )
}
