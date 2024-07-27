import { Injectable, signal } from '@angular/core';
import { AnnualData, InvesmentInput } from './investment.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  investmentData = signal<AnnualData[]>([]);
  constructor() { }

  calculateInvestmentResults(investmentData: InvesmentInput) : AnnualData[] {
    const { initialInvestment, annualInvestment, expectedReturn, duration } = investmentData;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
    this.investmentData.set(annualData)
    return this.investmentData();
  }

}
