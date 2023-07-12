import { ArgumentsFormFields } from "../App";

export const mainMath = ({
  m_01,
  m_02,
  phi_1,
  phi_2,
  phi_3
}: ArgumentsFormFields) => {

  return {
    first: m_01 + m_02,
    second: phi_1 + phi_2 + phi_3
  }
}