import { Sequelize } from 'sequelize';

import { getLogger } from './libs/logger';

const logger = getLogger('APP-DB');

export const sequelize = new Sequelize('sqlite::memory:');

const init = async (): Promise<void> => {
    try {
        await sequelize.sync();
        logger.info('Data base is connected!');
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
    try {
        const { initData } = await import('~service/configs/load-initial-data');
        await initData();
        logger.info('Init data is loaded!');
    } catch (err) {
        logger.error(err);
    }
};

if (process.env.NODE_ENV !== 'test') {
    init();
}
