import * as fs from 'fs'
import { promisify } from 'util';
import { v4 as uuid} from 'uuid';
import { NotFoundError } from '../../utils/error.utils';

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const FILE_PATH = './calculate.json';

class Calculate {
	id: string
		constructor(
		public operation: string
	) {
		this.id = uuid();
	}
}

type State = Calculate[];

export const CalculateService = class CalculateService {

	async handleCalculate(value: string, operation: string): Promise<void> {
		const state = await this.getState();
		const [digit1, digit2] = value.split(",");
		
		const firstDigit = Number(digit1);
		const secondDigit = Number(digit2);
		if (operation === 'sum'){
			const result = firstDigit + secondDigit;
			const sum = new Calculate(`${digit1} + ${digit2} = ${result}`)
			state.push(sum);
		} else if (operation === "subst"){
			const result = secondDigit - firstDigit;
			const subst = new Calculate(`${digit1} - ${digit2} = ${result}`)
			state.push(subst);
		} else if (operation === "mult"){
			const result = firstDigit * secondDigit;
			const mult = new Calculate(`${digit1} * ${digit2} = ${result}`)
			state.push(mult);
		} else if (operation === "div"){
			const result = secondDigit / firstDigit;
			const div = new Calculate(`${digit1} / ${digit2} = ${result}`)
			state.push(div);
		} else if (operation === "pov"){
			const result = firstDigit ** secondDigit;
			const pov = new Calculate(`${digit1} ** ${digit2} = ${result}`)
			state.push(pov);
		} else {
      throw new NotFoundError();
    }
    await this.setState(state);
	};

	async handleList(): Promise<State> {
		let state = await this.getState();
			if (state.length < 1) {
			throw new NotFoundError();
		}
		return state;
	};

	async handleShow(value: string): Promise<Calculate> {
    const state = await this.getState();

    const match = state.find(operation => operation.id === value);
    if (!match) {
      throw new NotFoundError();
    }
    return match;
  }

	async handleClear(): Promise<void> {
		const state = await this.getState();
		state.length = 0;
		await this.setState(state);
	};

	private async getState(): Promise<State> {
		let data = '[]';
	
		try {
			data = await readFile(FILE_PATH, 'utf-8');
		} catch {
			await writeFile(FILE_PATH, data);
		} finally {
			return JSON.parse(data);
		}
	};
	
	private async setState(state: State): Promise<void> {
		try {
			await writeFile(FILE_PATH, JSON.stringify(state));
		} catch (error) {
			throw error;
		}
	};
}