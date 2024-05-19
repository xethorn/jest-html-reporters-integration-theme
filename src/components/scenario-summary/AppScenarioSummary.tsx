import css from './AppScenarioSummary.module.css'
import {GenericStatus, Scenario} from "../../state/store.ts";
import {useContextState} from "../../state/context.tsx";

export function AppScenarioSummary(props: { scenario: Scenario }) {
  const {state, setState} = useContextState()

  let checkClass = css.PassCheck;
  if (props.scenario.status == GenericStatus.FAIL) {
    checkClass = css.FailCheck
  }

  const openScenario = () => {
    setState({
      ...state,
      currentScenario: props.scenario
    })
  }

  const activeClass = props.scenario.id == state.currentScenario?.id ? css.active : '';

  return <div className={`${css.AppScenarioSummary} ${checkClass} ${activeClass}`} onClick={openScenario}>
    <h3>
      <span>{GenericStatus[props.scenario.status]}</span>
      {props.scenario.name}
    </h3>
  </div>
}