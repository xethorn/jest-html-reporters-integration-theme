import css from './AppFeatures.module.css'
import {useContextState} from "../../state/context.tsx";
import {FeatureIcon} from "../../assets/icons/FeatureIcon.tsx";
import {AppScenarioSummary} from "../scenario-summary/AppScenarioSummary.tsx";

export function AppFeatures() {
  const {state} = useContextState()

  return <div className={css.AppFeatures}>
    {state.features?.map((feature) =>
      <div id={`feature-${feature.name}`} className={css.AppFeature}>
        <h2 className={css.AppFeatureName}>
          <FeatureIcon/>
          {feature.name}
        </h2>

        {feature.scenarios.map((scenario) =>
          <AppScenarioSummary key={scenario.name} scenario={scenario}/>
        )}
      </div>
    )}
  </div>
}