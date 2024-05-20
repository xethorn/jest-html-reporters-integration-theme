/**
 * Represents the status of a scenario or a step in a scenario (whether it
 * passed, failed, or was skipped).
 */
export enum GenericStatus {
  PASS,
  FAIL,
}

let featureIdSequence = 0
let scenarioIdSequence = 0
let scenarioStepIdSequence = 0

/**
 * Represents a scenario step. In a regular scenario, each step happens
 * sequentially, and will contain logs as well as errors.
 */
export class ScenarioStep {
  public readonly id: number

  /**
   * Creates a new scenario step.
   *
   * @param name the name of the step. E.g. "Given a user."
   * @param duration the time it took for the step to run.
   * @param failureMessage the error returned if the step was not successful.
   * @param logs the list of logs that were published while the step was
   *    being executed. Use `addMsg` from jest-html-reporters to publish
   *    them. Regular logs will not be included.
   */
  constructor(
    public readonly name: string,
    public readonly duration: number,
    public readonly failureMessage: string | undefined,
    public readonly logs: {
      message?: string,
      request?: { verb: string, url: string, body?: object },
      response?: { status: number, body?: object },
      createTime: number
    }[]
  ) {
    this.id = scenarioStepIdSequence++;
  }
}

/**
 * Represents the scenario being tested. For example: "As a user, I cannot log
 * in with invalid credentials." The scenario belongs to a feature (e.g.
 * authentication).
 */
export class Scenario {
  public readonly id: number

  /**
   * Creates a new scenario.
   *
   * @param name the name of the scenario.
   * @param feature the feature the scenario belongs to. E.g. Authentication.
   * @param status the status of the scenario (whether it was successful or
   *    failed).
   * @param steps the list of steps the scenario went through.
   */
  constructor(
    public readonly name: string,
    public readonly feature: string,
    public readonly status: GenericStatus,
    public readonly steps: ScenarioStep[]) {
    this.id = scenarioIdSequence++;
  }
}

/**
 * Represents a feature on your application. Features are commonly grouping
 * many different scenarios.
 *
 * For instance: "Authentication" feature will have a scenario
 * around users being able to authenticate with valid credentials, users
 * cannot authenticate with invalid credentials.
 */
export class Feature {
  public readonly id: number

  /**
   * Creates a new feature.
   *
   * @param name the name of the feature.
   * @param scenarios the list of scenarios.
   */
  constructor(
    public readonly name: string,
    public readonly scenarios: Scenario[]
  ) {
    this.id = featureIdSequence++;
  }
}

declare global {
  interface Window {
    jest_data: unknown
  }
}

/**
 * Fetches the data from the local result.js file and loads it into memory,
 * then goes through the records to reformat them.
 *
 * Under the hood, this uses `eval` to interpret the js file and recover the
 * data, which wouldn't be too far off from what <script> would do. Once the
 * data has been evaluated, it is remapped into our internal models.
 */
export async function load() {
  // eslint-disable-next-line
  const results = window.jest_data as any
  console.log(results)

  // eslint-disable-next-line
  const scenarios: Scenario[] = results.testResults.map((file: any) => {
    return new Scenario(
      file.testResults[0].ancestorTitles[0],
      file.testFilePath.split('/features/')[1].split('/')[0],
      file.numFailingTests === 0 ? GenericStatus.PASS : GenericStatus.FAIL,

      // eslint-disable-next-line
      file.testResults.map((step: any) => new ScenarioStep(
        step.title,
        step.duration,
        step.failureMessages[0],
        // eslint-disable-next-line
        ((results.attachInfos[file.testFilePath] || {})[step.fullName] || []).map((log: any) => {
          if (
            log.description.startsWith('Request: GET') ||
            log.description.startsWith('Request: POST') ||
            log.description.startsWith('Request: PUT') ||
            log.description.startsWith('Request: PATCH') ||
            log.description.startsWith('Request: DELETE')
          ) {
            const [, verb, url, ...body] = log.description.replace('\n', ' ').split(' ')
            let json = '{}'
            if (body.length > 1) {
              json = body.join(' ')
            }
            return {request: {verb: verb, url: url, body: JSON.parse(json)}}
          }

          if (log.description.startsWith('Response: ')) {
            const [, status, ...body] = log.description.replace('\n', ' ').split(' ')
            let json = '{}'
            if (body.length > 1) {
              json = body.join(' ')
            }
            console.log(status, json)
            return {response: {status: status,  body: JSON.parse(json)}}
          }

          return {message: log.description}
        })
      ))
    )
  });

  const features = Array.from(Map.groupBy(scenarios, (scenario: Scenario) => {
    return scenario.feature
  }).entries()).map((entry) => new Feature(
    entry[0],
    entry[1]
  ))

  return {
    summary: {
      failedTests: results.numFailedTestSuites,
      passedTests: results.numPassedTestSuites
    },
    features: features
  }
}