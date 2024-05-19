import css from './AppScenarioSummary.module.css'
import {GenericStatus, Scenario} from "../../state/store.ts";

export function AppScenarioSummary(props: { scenario: Scenario }) {
  let checkClass = css.PassCheck;
  if (props.scenario.status == GenericStatus.FAIL) {
    checkClass = css.FailCheck
  }

  return <div className={`${css.AppScenarioSummary} ${checkClass}`}>
    <h3>
      <span>{GenericStatus[props.scenario.status]}</span>
      {props.scenario.name}
    </h3>
  </div>
}