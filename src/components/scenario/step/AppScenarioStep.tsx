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
      <div key={`${props.step.id}-${index}`}>
        {log.message && <div className={css.AppScenarioStepLogMessage}>
            <pre>{log.message}</pre>
        </div>}

        {log.request && <div className={css.AppScenarioStepLogRequest}>
            <div className={css.AppScenarioStepLogRequestHeader}>
                <strong>{log.request.verb}</strong> {log.request.url}
            </div>
          {log.request.body !== undefined &&
              <div className={css.AppScenarioStepLogRequestBody}>
                {JSON.stringify(log.request.body)}
              </div>}
        </div>}

        {log.response && <div className={css.AppScenarioStepLogResponse}>
            <div className={`${css.AppScenarioStepLogResponseHeader} ${log.response.status.toString().startsWith("2") ? css.Success: css.Failure}`}>
                <strong>{log.response.status}</strong>
            </div>
          {log.response.body !== undefined &&
              <div className={css.AppScenarioStepLogResponseBody}>
                {JSON.stringify(log.response.body)}
              </div>}
        </div>}
      </div>)
    }

  </div>
}