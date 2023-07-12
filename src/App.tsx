import type { Component  } from 'solid-js';
import { createSignal, Switch, Match } from 'solid-js';
import { mainMath } from './math/math';

type APP_STATE = 'PASS_ARGUMENTS' | 'CALCULATING' | 'SEE_RESULTS';

const initialState: APP_STATE = 'PASS_ARGUMENTS';

const [appState, setAppState] = createSignal<APP_STATE>(initialState);

const App: Component = () => {
  const calculating = () => appState() !== 'PASS_ARGUMENTS' ? "step-primary" : "";
  const seeResults = () => appState() === 'SEE_RESULTS' ? "step-primary" : "";

  return (
    <main class="hero min-h-screen">
      <div class="text-center flex flex-col">
        <ul class="steps">
          <li class={`step step-primary`}>Pass Arguments</li>
          <li class={`step ${calculating()}`}>Calculating</li>
          <li class={`step ${seeResults()}`}>Results</li>
        </ul>
            <div class="self-center h-[500px] flex items-center justify-center">
              <Switch>
                <Match when={appState() === "PASS_ARGUMENTS"}>
                  <PassArguments />
                </Match>
                <Match when={appState() === "CALCULATING"}>
                  <Calculating />
                </Match>
                <Match when={appState() === "SEE_RESULTS"}>
                  <SeeResults />
                </Match>
              </Switch>
            </div>
            <div class="self-end mt-24">
              <button class="btn btn-primary" onClick={() => setAppState(() => "PASS_ARGUMENTS")}>Change to PASS_ARGUMENTS</button>
              <button class="btn btn-primary" onClick={() => setAppState(() => "CALCULATING")}>Change to CALCULATING</button>
              <button class="btn btn-primary" onClick={() => setAppState(() => "SEE_RESULTS")}>Change to SEE_RESULTS</button>
            </div>
      </div>
    </main>
  );
};

export type ArgumentsFormFields = {
  m_01: number;
  m_02: number;
  phi_1: number;
  phi_2: number;
  phi_3: number;
};

const [argumentsForm, setArgumentsForm] = createSignal<ArgumentsFormFields>({
  m_01: 0,
  m_02: 0,
  phi_1: 0,
  phi_2: 0,
  phi_3: 0
});

const [result, setResult] = createSignal({
  result1: 0,
  result2: 0,
});

const updateFormField = (formFieldKey: keyof ArgumentsFormFields, value: number) => {
  setArgumentsForm(prev => ({...prev, [formFieldKey]: value }));
}

const PassArguments: Component = () => {
  return <form onSubmit={() => {
    setAppState(() => "CALCULATING")
    const { first, second } = mainMath(argumentsForm())
    setResult({
      result1: first,
      result2: second
    })
    setAppState(() => "SEE_RESULTS")
  }}>
    <div class='my-4'>
      <label class="mx-8" for="m_01">M 1</label>
      <input name="m_01" value={argumentsForm().m_01}  onChange={(e) => updateFormField("m_01", parseFloat(e.currentTarget.value))} type="text" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="m_02">M 2</label>
      <input name="m_02" value={argumentsForm().m_02} onChange={(e) => updateFormField("m_02", parseFloat(e.currentTarget.value))} type="text" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_1">PHI 1</label>
      <input name="phi_1" value={argumentsForm().phi_1} onChange={(e) => updateFormField("phi_1", parseFloat(e.currentTarget.value))}  type="text" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_2">PHI 2</label>
      <input name="phi_2" value={argumentsForm().phi_2} onChange={(e) => updateFormField("phi_2", parseFloat(e.currentTarget.value))} type="text" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_3">
        PHI 3
      </label>
       <input name="phi_3" value={argumentsForm().phi_3} onChange={(e) => updateFormField("phi_3", parseFloat(e.currentTarget.value))} type="text" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <button type="submit" class="btn btn-primary">Calculate</button>
  </form>
}

const Calculating: Component = () => {
  return <div class='flex'>
    <span class="loading loading-infinity loading-lg"></span>
  </div>
}

const SeeResults: Component = () => {
  const {result1, result2} = result();
  return (<div class="stats shadow stats-vertical">
  <div class="stat place-items-center">
    <div class="stat-title">First Value</div>
    <div class="stat-value">{result1}</div>
  </div>
  <div class="stat place-items-center">
    <div class="stat-title">Second value</div>
    <div class="stat-value text-secondary">{result2}</div>
  </div>
</div>)
}

export default App;
