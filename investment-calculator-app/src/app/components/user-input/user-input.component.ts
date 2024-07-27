import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';
import { InvestmentResultComponent } from "../investment-result/investment-result.component";
import { AnnualData } from '../../services/investment.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, InvestmentResultComponent],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal<number>(0);
  annualInvestment = signal<number>(0);
  expectedReturn = signal<number>(0);
  duration = signal<number>(0);
  invesment = inject(InvestmentService);
onCalculate() {
 this.invesment.calculateInvestmentResults({
    initialInvestment: this.initialInvestment(),
    annualInvestment: this.annualInvestment(),
    expectedReturn: this.expectedReturn(),
    duration: this.duration(),
  });
}

}
