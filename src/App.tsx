import type { Component, JSXElement,  } from 'solid-js';
import { createSignal, Switch, Match, onMount, createEffect } from 'solid-js';


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

const PassArguments: Component = () => {
  return <form onSubmit={() => setAppState(() => "CALCULATING")}>
    <div class='my-4'>
      <label class="mx-8" for="m_01">M 1</label>
      <input name="m_01" value={2} type="number" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="m_02">M 2</label>
      <input name="m_02" value={4} type="number" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_1">PHI 1</label>
      <input name="phi_1" value={0} type="number" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_2">PHI 2</label>
      <input name="phi_2" value={20} type="number" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <div class='my-4'>
      <label class="mx-8" for="phi_3">
        PHI 3
      </label>
       <input name="phi_3" value={30} type="number" class="input input-bordered input-primary w-full max-w-xs" />
    </div>
    <button type="submit" class="btn btn-primary">Calculate</button>
  </form>
}

const Calculating: Component = () => {
  return <div class='flex'>
    <span class="loading loading-infinity loading-lg w-[200px]"></span>
  </div>
}

const SeeResults: Component = () => {
    createEffect(() => {
      setTimeout(() => {
        setAppState(() => "SEE_RESULTS")
        console.log("xd")
      }, 4000);
    })


  return <div class="stats shadow stats-vertical">
  
  <div class="stat place-items-center">
    <div class="stat-title">First Value</div>
    <div class="stat-value">31K</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Second value</div>
    <div class="stat-value text-secondary">4,200</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Third value</div>
    <div class="stat-value">1,200</div>
  </div>
  
</div>
}
export default App;
