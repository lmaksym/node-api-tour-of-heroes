import { Sequelize } from 'sequelize';

import { getLogger } from './libs/logger';

const logger = getLogger('APP-DB');

export const sequelize = new Sequelize('sqlite::memory:');

const init = ()=>{
    sequelize.sync().then(() => {
        logger.info('Data base is connected!');
    }, (err)=> {
        logger.error(err);
        process.exit(1);
    });
};

if (process.env.NODE_ENV !== 'test') {
    init();
}
