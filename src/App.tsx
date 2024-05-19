import css from './App.module.css'
import {AppHeader} from "./components/header/AppHeader.tsx";
import {AppSidebar} from "./components/sidebar/AppSidebar.tsx";
import {AppFeatures} from "./components/features/AppFeatures.tsx";
import {AppScenario} from "./components/scenario/AppScenario.tsx";

function App() {
  return (
    <div className={css.App}>
      <AppHeader />
      <div className={css.AppBody}>
        <AppSidebar />
        <AppFeatures />
        <AppScenario />
      </div>
    </div>
  )
}

export default App
