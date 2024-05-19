import css from './AppScenarioStep.module.css'
import {ScenarioStep} from "../../../state/store.ts";
import {CheckMarkIcon} from "../../../assets/icons/CheckMarkIcon.tsx";
import Convert from 'ansi-to-html';
import JsonView from "@uiw/react-json-view";
import {nordTheme} from '@uiw/react-json-view/nord';

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
                  <JsonView
                      value={log.request.body}
                      style={nordTheme}
                      indentWidth={20}
                      collapsed={2}
                      shortenTextAfterLength={100}
                      displayObjectSize={false}
                      enableClipboard={false}
                      displayDataTypes={false}
                  /></div>}
        </div>}

        {log.response && <div className={css.AppScenarioStepLogResponse}>
            <div
                className={`${css.AppScenarioStepLogResponseHeader} ${log.response.status.toString().startsWith("2") ? css.Success : css.Failure}`}>
                <strong>{log.response.status}</strong>
            </div>
          {log.response.body !== undefined &&
              <div className={css.AppScenarioStepLogResponseBody}>
                  <JsonView
                      value={log.response.body}
                      style={nordTheme}
                      indentWidth={20}
                      collapsed={2}
                      shortenTextAfterLength={100}
                      displayObjectSize={false}
                      enableClipboard={false}
                      displayDataTypes={false}
                  />
              </div>}
        </div>}
      </div>)
    }

  </div>
}