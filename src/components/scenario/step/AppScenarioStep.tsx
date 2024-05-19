import css from './AppScenarioStep.module.css'
import {ScenarioStep} from "../../../state/store.ts";
import {CheckMarkIcon} from "../../../assets/icons/CheckMarkIcon.tsx";

export function AppScenarioStep(props: { step: ScenarioStep }) {
  return <div className={css.AppScenarioStep} key={props.step.name}>
    <h3>
      {!props.step.failureMessage && <CheckMarkIcon/>}
      {props.step.name}
      <time>{props.step.duration}ms</time>
    </h3>
  </div>
}