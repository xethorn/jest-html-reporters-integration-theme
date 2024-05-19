import css from './App.module.css'
import {AppHeader} from "./components/header/AppHeader.tsx";
import {AppSidebar} from "./components/sidebar/AppSidebar.tsx";
import {AppFeatures} from "./components/features/AppFeatures.tsx";
import {AppScenario} from "./components/scenario/AppScenario.tsx";
import {useContextState} from "./state/context.tsx";
import {useEffect} from "react";
import {load} from "./state/store.ts";

function App() {
  const {setState} = useContextState();

  useEffect(() => {
    setState({features: load()})
  })

  return (
    <div className={css.App}>
      <AppHeader/>
      <div className={css.AppBody}>
        <AppSidebar/>
        <AppFeatures/>
        <AppScenario/>
      </div>
    </div>
  )
}

export default App
