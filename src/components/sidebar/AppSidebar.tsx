import css from './AppSidebar.module.css'

export function AppSidebar() {
  return <div className={css.AppSidebar}>
    <h2>Features</h2>
    <ul>
      <li><a>Users</a></li>
      <li><a>Posts</a></li>
      <li><a>Comments</a></li>
    </ul>

    <div className={css.AppSidebarAuthor}>
      Theme graciously provided by <a href={"https://github.com/xethorn"}>Michael Ortali</a>.
    </div>
  </div>
}