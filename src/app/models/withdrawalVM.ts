import { Payroll } from "./payroll";
import { Withdrawal } from "./withdrawal"

export class WithdrawalVM {
  withdrawals: Withdrawal[] = [];
  payrolls: Payroll[] = [];
  date: string
}
