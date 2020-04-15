import { HeroListResponse, Hero } from '~service/shared/interfaces';

const mapElement = (element: Hero): Hero => {
    return {
        id: element.id,
        name: element.name
    };
};
const mapList = (list: HeroListResponse): Hero[] => {
    return list.rows.map((element) => {
        return mapElement(element);
    });
};

export const heroMapper = {
    mapList,
    mapElement
};
