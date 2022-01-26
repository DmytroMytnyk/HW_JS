import { v4 as uuid} from 'uuid';

export class Todo {
	id: string
	completed: boolean

	constructor(
		public text: string
	) {
		this.id = uuid();
		this.completed = false;
	}
}