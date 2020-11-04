import { cloneDeep } from 'lodash';

/**
 * @author acharris
 * @description Definicion de utilidades basicas genericas.
 */
export let Utils = {
    cloneObject(object: any) {
        return cloneDeep(object);
    },
};
