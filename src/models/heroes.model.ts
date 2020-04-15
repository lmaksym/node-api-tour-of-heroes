import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../db';

import { Hero, HeroListResponse } from '../shared/interfaces';

class HeroesModel extends Model {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public static findAllWithParams(
        params: any
    ): Promise<HeroListResponse> {
        return HeroesModel.findAndCountAll({ ...params });
    }

    public static findById(id: number): Promise<HeroesModel> {
        return HeroesModel.findByPk(id);
    }

    public static createNew(
        hero: Hero
    ): Promise<HeroesModel> {
        return HeroesModel.create(hero);
    }

    public static async updateElement(
        id: number,
        hero: Hero
    ): Promise<HeroesModel> {
        await HeroesModel.update(hero, { where: { id } });
        return HeroesModel.findById(id);
    }

    public static async deleteElement(
        id: number
    ): Promise<any> {
        const hero = await HeroesModel.findById(id);
        return await hero.destroy();
    }

}

HeroesModel.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false,
            unique: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: 'heroes',
        sequelize: sequelize,
    }
);

export { HeroesModel };
