export const query = Symbol('query');
export const related = Symbol('topRelated');
export const byId = Symbol('byID');
export const symb = {query, related, byId};
export type endPointT = typeof query | typeof byId | typeof related | undefined;
