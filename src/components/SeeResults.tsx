import { Component } from "solid-js";
import { result } from "../store/result";

const SeeResults: Component = () => {
  const [resultValue] = result;
  const {result1, result2} = resultValue();
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

export default SeeResults;