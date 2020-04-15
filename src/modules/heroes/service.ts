import { HeroesModel } from '~service/models/heroes.model';
import { Hero } from '~service/shared/interfaces';
import { heroMapper } from './mappers';

const findById = async (id: number): Promise<Hero> => {
    return HeroesModel.findById(id);
};

const findAll = async (params: any): Promise<Hero[]> => {
    const list = await HeroesModel.findAllWithParams(params);
    return heroMapper.mapList(list);
};

const create = async (hero: Hero): Promise<Hero> => {
    return await HeroesModel.createNew(hero);
};

const update = async (id: number, hero: Hero): Promise<Hero> => {
    return await HeroesModel.updateElement(id, hero);
};

const remove = async (id: number): Promise<Hero> => {
    return await HeroesModel.deleteElement(id);
};

export const heroesService = {
    findById,
    findAll,
    create,
    update,
    remove,
};
