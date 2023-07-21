import { ArgumentsFormFields } from "../App";
import { readNormalDistributionData } from "./readData";
import calculateGamma from '@stdlib/math-base-special-gamma';
import calculatePolygamma from '@stdlib/math-base-special-polygamma';

export const mainMath = async ({
  m_01,
  m_02,
  phi_1,
  phi_2,
  phi_3
}: ArgumentsFormFields) => {
  const normalDistributionData = await readNormalDistributionData();
  const {phiD_1, phiD_2, phiD_3} = calculatePhiD(normalDistributionData, { phi_1, phi_2, phi_3});
  const yFuncValue = calculateYFuncValue(
    {
      phi_1,
      phi_2,
      phi_3
    }
  );

  calculateFreeEnergy();
  calculateTrainingLoss();
  calculateCrossValidationLoss();
  calculateGeneralizationLoss();
  calculateSredniaSN();
  calculateSredniaS();
  calculateWAIC();

  return {
    first: yFuncValue + m_01 + m_02,
    second: phiD_1 + phiD_2 + phiD_3 + calculateWAIC()
  }
}

type PhiArgs = {
  phi_1: number;
  phi_2: number;
  phi_3: number;
}

const calculatePhiD = (normalDistributionData: unknown, {
  phi_1,
  phi_2,
  phi_3
}: PhiArgs) => {
  return {
    phiD_1: phi_1,
    phiD_2: phi_2,
    phiD_3: phi_3
  }
}

const calculateYFuncValue = ({
  phi_1,
  phi_2,
  phi_3
}: PhiArgs) => {
  const gammaValue = calculateGamma((phi_3 + 2)/4);
  return gammaValue;
}


const calculateFreeEnergy = () => {
  return 0;
}

const calculateTrainingLoss = () => {
  return 0;
}

const calculateCrossValidationLoss = () => {
  return 0;
}

/**
 * WAIC (widely applicable information criterion).
 * @returns WAIC
 */
const calculateWAIC = () => {

  return calculateUFunctionValue() + calculateTrigamma(2);
}

const calculateUFunctionValue = () => {
  return 0;
}

const calculateTrigamma = (value: number) => {
  return calculatePolygamma(1, value);
}

const calculateSredniaS = () => {
  return 0;
}

const calculateSredniaSN = () => {
  return 0;
}

const calculateGeneralizationLoss = () => {
  return 0;
}