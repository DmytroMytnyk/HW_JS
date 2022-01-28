import { CalculateController } from './app/calculate/calculate.controller';
import { InternalError } from './utils/error.utils';
import { Logger } from './utils/logger.utils';

const bootstrap = () => {
	const logger = new Logger();

	const argv = process.argv[2];

	const handleError = (err: Error = new InternalError()): void => {
		logger.warn(err);
		
		process.exit(1);
	}

	process.on('uncaughtException', handleError)
	process.on('unhandledRejection', handleError)

	new CalculateController().handle(argv);
};

bootstrap();