export const related = Symbol('topRelated');
export const byId = Symbol('byID');
export const symb = {related, byId};
export type endPointT = typeof byId | typeof related | undefined;
