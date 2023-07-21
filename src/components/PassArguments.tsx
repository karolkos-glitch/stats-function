import { Component, createSignal } from 'solid-js';
import { result } from '../store/result';
import { appState } from '../store/appState';
import { mainMath } from '../math/math';
import { ArgumentsFormFields } from './types';

const [argumentsForm, setArgumentsForm] = createSignal<ArgumentsFormFields>({
  m_01: 0,
  m_02: 0,
  phi_1: 0,
  phi_2: 0,
  phi_3: 0
});

const updateFormField = (formFieldKey: keyof ArgumentsFormFields, value: number) => {
  setArgumentsForm(prev => ({...prev, [formFieldKey]: value }));
}

const PassArguments: Component = () => {
  return <form onSubmit={async () => {
    const [_, setResult] = result;
    const [__, setAppState] = appState;
    setAppState(() => "CALCULATING")
    const { first, second } = await mainMath(argumentsForm())
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
};

export default PassArguments;