import css from './AppScenario.module.css'
import {Scenario} from "../../state/store.ts";
import {ScenarioIcon} from "../../assets/icons/ScenarioIcon.tsx";

export function AppScenario(props: {scenario: Scenario}) {
  return <div className={css.AppScenario} key={props.scenario.name}>
    <h2>
      <ScenarioIcon />
      {props.scenario.name}
    </h2>
  </div>
}