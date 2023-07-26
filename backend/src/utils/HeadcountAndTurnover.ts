import { ErrorStatus } from '.';
import connection from '../database/connection';
import { EmployeeModel } from '../database/models';
import { startOfMonth, lastDayOfMonth, add } from 'date-fns';

class HeadcountAndTurnover {
	public async getHeadcountAndTurnover(email: string) {
		const employees = await this.getDirectAndIndirectEmployees(email);
		if (employees.length === 0) return [];

		const firstDayOfEachMonth = this.getFirstDayOfEachMonthOfAPeriod(employees);

		const headcountData = [];
		const turnoverData = [];

		for (const firstDayOfMonth of firstDayOfEachMonth) {
			const [activeEmployees, inactiveEmployees] = this
				.numberOfActiveAndInactiveEmployeesOnMonth(employees, firstDayOfMonth);

			headcountData.push({
				x: firstDayOfMonth
					.toLocaleDateString('pt-br', { month: '2-digit', year: 'numeric' }),
				y: activeEmployees,
			});

			turnoverData.push({
				x: firstDayOfMonth
					.toLocaleDateString('pt-br', { month: '2-digit', year: 'numeric' }),
				y: inactiveEmployees / activeEmployees,
			});
		}

		return {
			headcount: [{ id: 'headcount', data: headcountData }],
			turnover: [{ id: 'turnover', data: turnoverData }],
		};
	}

	private async getDirectAndIndirectEmployees(leaderEmail: string) {
		const query = `
		WITH RECURSIVE EmployeesCTE as (
			SELECT registration, email, leader_email, admission, termination
				FROM employees
				WHERE leader_email = "${leaderEmail}"

				UNION ALL

				SELECT
					indirect.registration,
					indirect.email,
					indirect.leader_email,
					indirect.admission,
					indirect.termination
				FROM employees AS indirect
				INNER JOIN EmployeesCTE as e_cte
				ON indirect.leader_email = e_cte.email
		)

		SELECT * FROM EmployeesCTE ORDER BY admission ASC
		`;

		return (await connection.query(query))[0] as EmployeeModel[];
	}

	private getPeriodOfChart(employees: EmployeeModel[]) {
		const start = new Date(employees[0].admission);
		const end = employees
			.some(({ termination }) => termination === null)
			? new Date()
			: new Date(employees[employees.length - 1]?.termination);

		return [start, end];
	}

	private getFirstDayOfEachMonthOfAPeriod(employees: EmployeeModel[]) {
		const [start, end] = this.getPeriodOfChart(employees);
		const months = [];

		let startOfPeriod = startOfMonth(start);
		const endOfPeriod = lastDayOfMonth(end);

		while (startOfPeriod <= endOfPeriod) {
			months.push(startOfPeriod);
			startOfPeriod = add(startOfPeriod, { months: 1 });
		}

		return months;
	}

	private numberOfActiveAndInactiveEmployeesOnMonth(
		employees: EmployeeModel[], firstDayOfMonth: Date,
	) {
		let activeEmployees = 0;
		let inactiveEmployees = 0;
		const endOfMonth = lastDayOfMonth(firstDayOfMonth);

		for (const { admission, termination } of employees) {
			const admissionDate = new Date(admission);
			const terminationDate = new Date(termination);

			if (
				admissionDate <= firstDayOfMonth &&
				admissionDate <= endOfMonth &&
				(!termination || terminationDate > endOfMonth)
			) {
				activeEmployees += 1;
			}

			if (
				termination &&
				(terminationDate >= firstDayOfMonth && terminationDate <= endOfMonth)
			) {
				inactiveEmployees += 1;
			}
		}

		return [activeEmployees, inactiveEmployees];
	}
}

export default HeadcountAndTurnover;
