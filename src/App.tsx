import css from './App.module.css'
import {AppHeader} from "./components/header/AppHeader.tsx";
import {AppSidebar} from "./components/sidebar/AppSidebar.tsx";
import {AppFeatures} from "./components/features/AppFeatures.tsx";
import {AppScenario} from "./components/scenario/AppScenario.tsx";
import {ContextProvider} from "./state/context.tsx";

function App() {
  return (
    <div className={css.App}>
      <ContextProvider>
        <AppHeader/>
        <div className={css.AppBody}>
          <AppSidebar/>
          <AppFeatures/>
          <AppScenario/>
        </div>
      </ContextProvider>
    </div>
  )
}

export default App
