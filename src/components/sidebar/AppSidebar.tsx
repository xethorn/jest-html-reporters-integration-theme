import css from './AppSidebar.module.css'
import {useContextState} from "../../state/context.tsx";

export function AppSidebar() {
  const {state} = useContextState()

  return <div className={css.AppSidebar}>
    <h2>Features</h2>
    <ul>
      {state.features?.map((feature =>
          <li key={`sidebar-${feature.id}`}><a href={`#feature-${feature.name}`}>{feature.name}</a></li>
      ))}
    </ul>

    <div className={css.AppSidebarAuthor}>
      Theme graciously provided by <a href={"https://github.com/xethorn"}>Michael Ortali</a>.
    </div>
  </div>
}