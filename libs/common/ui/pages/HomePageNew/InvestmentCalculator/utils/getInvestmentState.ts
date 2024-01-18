import { IInvestChart } from '../components';
import { IREState } from '../types';

export const getInvestmentState = (
  investment: number,
  year: number,
  state: IREState,
) => {


  
  const chartData: IInvestChart[] = [];
  const ownershipShare =  investment / state.price;
  const _capRate =  state.capRate;
  const _appRate =  state.appreciationRate;

  
  for (let i = 1; i <= 5; i++) {
    const capRate = Math.pow(1 + _capRate, i) - 1;
    const appRate = Math.pow(1 + _appRate, i);
    
    const investmentValue = investment * appRate;
    const valueAppreciation = investmentValue - investment;
    const rentalIncome = capRate * state.price  * ownershipShare;
    chartData.push({
      appreciation: valueAppreciation,
      investment: investment,
      rental: rentalIncome,
      year: year + i,
    });
  }

  return {
    rentalIncome: chartData[4].rental,
    investmentValue: chartData[4].investment,
    valueAppreciation: chartData[4].appreciation,
    chartData,
  };
};

