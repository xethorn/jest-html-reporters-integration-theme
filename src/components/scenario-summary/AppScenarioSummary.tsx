import css from './AppScenarioSummary.module.css'
import {Scenario} from "../../state/store.ts";

export function AppScenarioSummary(props: {scenario: Scenario}) {
  return <div className={css.AppScenarioSummary}>
    <h3>{props.scenario.name}</h3>
  </div>
}