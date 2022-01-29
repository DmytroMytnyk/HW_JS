import { BadRequestError } from '../../utils/error.utils';
import { Logger } from '../../utils/logger.utils';
import { CalculateService } from './calculate.service';

export const CalculateController = class CalculateController {
	constructor(
		private readonly service = new CalculateService(),
		private readonly logger = new Logger()
	) {};

	async handle(argv: string): Promise<void> {
		try {
			const [method, value] = argv.split('=');
				switch (method) {
					case 'calculate': {
						const [method, digit] = value.split(";");
						await this.service.handleCalculate(method, digit);
						this.logger.notify('Calculated successfully', digit)
						break;
					}
					case 'show': {
						const listing = await this.service.handleList();
						this.logger.notify('Listing was successfully', listing)
						break;
					}
					case 'show:id': {
						const [method, value] = argv.split(':');
						const id = await this.service.handleShow(method, value);
						this.logger.notify('Shown by id successfully', id)
						break;
					}
					case 'clear': {
						await this.service.handleClear();
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