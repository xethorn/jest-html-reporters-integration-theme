import css from './AppFeatures.module.css'
import {useContextState} from "../../state/context.tsx";

export  function AppFeatures() {
  const {state} = useContextState()

  return <div className={css.AppFeature}>
    {state.features?.map((feature) => <div id={`feature-${feature.name}`}>
      <h2 className={css.AppFeatureName}>{feature.name}</h2>
    </div>)}
  </div>
}