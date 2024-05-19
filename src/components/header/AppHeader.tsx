import css from './AppHeader.module.css'
import {useContextState} from "../../state/context.tsx";

export function AppHeader() {
  const {state} = useContextState()

  return <div className={css.AppHeader}>
    <h1>
      Integration Tests
    </h1>
    <div className={css.AppHeaderSummary}>
      <div className={css.AppHeaderSummaryPassedTests}>
        <span>{state.summary?.passedTests || 0}</span>
        Passed
      </div>
      <div className={css.AppHeaderSummaryFailedTests}>
        <span>{state.summary?.failedTests || 0}</span>
        Failed
      </div>
    </div>
  </div>
}