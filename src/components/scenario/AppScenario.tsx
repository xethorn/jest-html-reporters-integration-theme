import css from './AppScenario.module.css'
import {Scenario} from "../../state/store.ts";
import {ScenarioIcon} from "../../assets/icons/ScenarioIcon.tsx";
import {AppScenarioStep} from "./step/AppScenarioStep.tsx";

export function AppScenario(props: { scenario: Scenario }) {
  return <div className={css.AppScenario} key={props.scenario.name}>
    <div className={css.AppScenarioInner}>
      <h2>
        <ScenarioIcon/>
        {props.scenario.name}
      </h2>

      <div className={css.AppScenarioSteps}>
        {props.scenario.steps.map((step) => <AppScenarioStep key={step.id} step={step}/>)}
      </div>
    </div>
  </div>
}