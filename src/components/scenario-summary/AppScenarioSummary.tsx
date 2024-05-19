import css from './AppScenarioSummary.module.css'
import {Scenario} from "../../state/store.ts";

export function AppScenarioSummary(props: {scenario: Scenario}) {
  return <div className={css.AppScenarioSummary}>
    {props.scenario.name}
  </div>
}