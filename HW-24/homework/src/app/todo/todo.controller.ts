import { BadRequestError } from '../../utils/error.util';
import { Logger } from '../../utils/logger.utils';
import { TodoService } from './todo.service';

export const TodoController = class TodoController {
	constructor(
		private readonly service = new TodoService(),
		private readonly logger = new Logger()
	) {};

	async handle(argv: string): Promise<void> {
		try {
			const [option, value] = argv.split('=');
			const [methodName, methodArg] = option.split(':');

			switch (methodName) {
				case 'get':
					switch (methodArg) {
						case '+': {
							const todos = await this.service.handleList();

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case '-': {
							const todos = await this.service.handleList(true);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case '*': {
							const todos = await this.service.handleList(false);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case '/': {
							const todos = await this.service.handleList(false);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						case 'pow': {
							const todos = await this.service.handleList(false);

							this.logger.notify(`All todos:`, todos);
							break;
						}
						default:
							const todo = await this.service.handleGet(value);

							this.logger.notify(`Todo is found:`, todo);
						}
					break;
				case 'show': {
					await this.service.handleList(value);

					this.logger.notify('Listing was successfully')
					break;
				}
				case 'show:id': {
					await this.service.handleShow(value);

					this.logger.notify('Shown successfully')
					break;
				}
				case 'clear': {
					await this.service.handleClear(value);

					this.logger.notify('Cleared successfully')
					break;
				}
				default:
					throw new BadRequestError();
			}
		} catch (error) {
			this.logger.warn(error as Error);
		}
	}
}