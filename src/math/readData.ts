
const PATH = "/s057.json";

export const readNormalDistributionData = async () => {
  try{
    const normalDistributionData = await fetch(PATH);
    return await normalDistributionData.json();
  }catch(e){
    console.error(e);
    return null;
  }
};