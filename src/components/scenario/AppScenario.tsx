import css from './AppScenario.module.css'
import {Scenario} from "../../state/store.ts";

export function AppScenario(props: {scenario: Scenario}) {
  return <div className={css.AppScenario} key={props.scenario.name}>
    {props.scenario.name}
  </div>
}