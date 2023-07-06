const query = Symbol('query');
const related = Symbol('topRelated');
const byId = Symbol('byID');
export const symb = {query, related, byId};
export type endPointT = typeof query | typeof byId | typeof related | undefined;
