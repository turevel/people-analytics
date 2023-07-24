import { ErrorStatus } from '.';
import { EmployeeModel } from '../database/models';
import { ErrorMessages, HTTPStatusCode } from '../types';
import { startOfMonth, lastDayOfMonth } from 'date-fns';

class Headcount {
	public async getHeadcount(email: string) {
		await this.verifyEmail(email);
		const employees = await EmployeeModel.findAll();
		return this.getData(this.getEmployees(email, employees));
	}

	private async verifyEmail(email: string) {
		const alreadyExists = await EmployeeModel.findOne(
			{ where: { email }},
		);

		if (!alreadyExists) {
			throw new ErrorStatus(
				ErrorMessages.EMAIL_NOT_FOUND,
				HTTPStatusCode.NOT_FOUND,
			);
		}
	}

	private getEmployees(leaderEmail: string, employees: EmployeeModel[]):
  EmployeeModel[] {
		const directEmployees = [];

		for (const employee of employees) {
			if (employee.leader_email === leaderEmail) {
				directEmployees.push(employee);

				const indirectEmployeeEmail = employee.email;
				const indirectEmployeeEmployees = this
					.getEmployees(indirectEmployeeEmail, employees);

				directEmployees.push(...indirectEmployeeEmployees);
			}
		}

		return this.sortEmployeesByAdmissionDate(directEmployees);
	}

	private sortEmployeesByAdmissionDate(employees: EmployeeModel[]) {
		return employees.sort((a, b) => {
			const aDate = new Date(a.admission);
			const bDate = new Date(b.admission);

			if (aDate < bDate) return -1;
			else if (aDate > bDate) return 1;
			else return 0;
		});
	}

	private getData(employees: EmployeeModel[]) {
		const data: { x: string, y: number }[] = [];

		for (const employee of employees) {
			const admission = new Date(employee.admission);

			const label = `${String(admission.getMonth() + 1).padStart(2, '0')
			}-${admission.getFullYear()}`;

			if (!data.some(({ x }) => x === label)) {
				data.push({
					x: label,
					y: this.getActiveEmployeesLength(admission, employees),
				});
			}
		}

		return [{ id: 1, data }];
	}

	private getActiveEmployeesLength(period: Date, employees: EmployeeModel[]) {
		return employees.filter((employee) => this
			.employeeIsActiveOnPeriod(period, employee)).length;
	}

	private employeeIsActiveOnPeriod(period: Date, employee: EmployeeModel) {
		const firstDayOfMonth = startOfMonth(period);
		const endOfMonth = lastDayOfMonth(period);
		const employeeAdmission = new Date(employee.admission);
		const employeeTermination = !employee.termination
			? new Date()
			: new Date(employee.termination);

		return (
			(
				employeeAdmission <= firstDayOfMonth ||
        employeeAdmission >= firstDayOfMonth
			) && employeeAdmission <= endOfMonth &&
      employeeTermination >= endOfMonth
		);
	}
}

export default Headcount;
