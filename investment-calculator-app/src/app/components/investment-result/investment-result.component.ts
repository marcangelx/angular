import { Component, inject, input } from '@angular/core';
import { AnnualData } from '../../services/investment.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../../services/investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  investmentService = inject(InvestmentService);
  investmentsResult = this.investmentService.investmentData.asReadonly();
}
