import { HeroesModel } from '~service/models/heroes.model';
import { DEFAULT_HEROES_LIST } from '~service/shared/constants';
import { Hero } from '~service/shared/interfaces';

export const initData = async () => {
    const creationPromiseList = DEFAULT_HEROES_LIST.map(({name}: Hero) => {
        return HeroesModel.createNew({name});
    });
    return Promise.all(creationPromiseList);
};
