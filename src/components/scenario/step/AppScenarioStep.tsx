import css from './AppScenarioStep.module.css'
import {ScenarioStep} from "../../../state/store.ts";
import {CheckMarkIcon} from "../../../assets/icons/CheckMarkIcon.tsx";
import Convert from 'ansi-to-html';

export function AppScenarioStep(props: { step: ScenarioStep }) {
  return <div className={css.AppScenarioStep} key={props.step.name}>
    <h3>
      {!props.step.failureMessage && <CheckMarkIcon/>}
      {props.step.name}
      <time>{props.step.duration}ms</time>
    </h3>

    {props.step.failureMessage && <div className={css.AppScenarioStepError}>
        <h4>Error</h4>
        <pre dangerouslySetInnerHTML={{__html: new Convert().toHtml(props.step.failureMessage)}}/>
    </div>}

    {props.step.logs.map((log, index) =>
      <div className={css.AppScenarioStepLog} key={`${props.step.id}-${index}`}>
        {log.message && <div className={css.AppScenarioStepLogMessage}><pre>{log.message}</pre></div>}
      </div>)
    }

  </div>
}