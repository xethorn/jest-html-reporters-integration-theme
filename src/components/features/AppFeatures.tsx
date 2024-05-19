import css from './AppFeatures.module.css'
import {useContextState} from "../../state/context.tsx";
import {FeatureIcon} from "../../assets/icons/FeatureIcon.tsx";

export function AppFeatures() {
  const {state} = useContextState()

  return <div className={css.AppFeatures}>
    {state.features?.map((feature) =>
      <div id={`feature-${feature.name}`} className={css.AppFeature}>
        <h2 className={css.AppFeatureName}>
          <FeatureIcon />
          {feature.name}
        </h2>
      </div>
    )}
  </div>
}