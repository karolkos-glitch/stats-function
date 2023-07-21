import { createSignal } from "solid-js";

type APP_STATE = 'PASS_ARGUMENTS' | 'CALCULATING' | 'SEE_RESULTS';

const initialState: APP_STATE = 'PASS_ARGUMENTS';

export const appState = createSignal<APP_STATE>(initialState);
