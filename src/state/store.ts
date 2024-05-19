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
      request?: { verb: string, url: string, body?: unknown },
      response?: { status: number, body?: unknown },
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

/**
 * Transforms the json data from jest-html-reporters and turns it into
 * an internal model that can be used to represent the different features,
 * scenarios, and tests.
 */
export function load() {
  // TODO: figure out how to load the data, for now, just returning a flat
  //    list of data to work on the UI.
  return [
    new Feature("Authentication", [
        new Scenario("As a user, I can authenticate", "Authentication", GenericStatus.FAIL, [
          new ScenarioStep("Given: An email address", 1, "Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m2\u001b[39m\nReceived: \u001b[31m1\u001b[39m\n    at Object.toBe (/Users/harry.hou/Desktop/harry/report-examples/test/multipleTests.test.js:79:15)\n    at Promise.then.completed (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/utils.js:290:28)\n    at new Promise (<anonymous>)\n    at callAsyncCircusFn (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/utils.js:223:10)\n    at _callCircusTest (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/run.js:248:40)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at _runTest (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/run.js:184:3)\n    at _runTestsForDescribeBlock (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/run.js:86:9)\n    at _runTestsForDescribeBlock (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/run.js:81:9)\n    at run (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/run.js:26:3)\n    at runAndTransformResultsToJestFormat (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapterInit.js:120:21)\n    at jestAdapter (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-circus/build/legacy-code-todo-rewrite/jestAdapter.js:79:19)\n    at runTestInternal (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-runner/build/runTest.js:367:16)\n    at runTest (/Users/harry.hou/Desktop/harry/report-examples/node_modules/jest-runner/build/runTest.js:444:34)", []),
          new ScenarioStep("And: A password address", 1, undefined, [
            {message: "This is a regular log that was printed during the request.", createTime: 1716081456940},
            {request: {verb: "POST", url: "https://google.com/ {}"}, createTime: 1716081456940},
            {response: {status: 403, body: {}}, createTime: 1716081456940}
          ]),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
          new ScenarioStep("Given: An email address", 1, undefined, []),
          new ScenarioStep("And: A password address", 1, undefined, []),
          new ScenarioStep("Then: I can successfully log in", 1028, undefined, []),
        ]),
        new Scenario("As a user, I can't authenticate with invalid credentials", "Authentication", GenericStatus.PASS, []),
        new Scenario("As a user, I can authenticate with MFA", "Authentication", GenericStatus.PASS, []),
      ]
    ),
    new Feature("Posts", [
      new Scenario("As a user, I can create a new post", "Posts", GenericStatus.PASS, []),
      new Scenario("As a user, I can update an existing post", "Posts", GenericStatus.PASS, []),
      new Scenario("As a user, I can delete an existing post", "Posts", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Comments", [
      new Scenario("As a user, I can create comments", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can enable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can disable comments on posts", "Comments", GenericStatus.PASS, []),
      new Scenario("As a user, I can remove comments from posts", "Comments", GenericStatus.PASS, []),
    ]),
    new Feature("Sharing", [])
  ]
}