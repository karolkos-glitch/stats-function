import type { Component  } from 'solid-js';
import { Switch, Match } from 'solid-js';
import { appState } from './store/appState';
import PassArguments from './components/PassArguments';
import Calculating from './components/Calculating';
import SeeResults from './components/SeeResults';


const App: Component = () => {
  const [appStateValue, setAppState] = appState;
  const calculating = () => appStateValue() !== 'PASS_ARGUMENTS' ? "step-primary" : "";
  const seeResults = () => appStateValue() === 'SEE_RESULTS' ? "step-primary" : "";

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
                <Match when={appStateValue() === "PASS_ARGUMENTS"}>
                  <PassArguments />
                </Match>
                <Match when={appStateValue() === "CALCULATING"}>
                  <Calculating />
                </Match>
                <Match when={appStateValue() === "SEE_RESULTS"}>
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



export default App;
