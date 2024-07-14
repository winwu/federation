// importing a module from another federated remote,
// the ts compiler will throw an error since it can't find shared/CustomButton module,
// to solve this issue add the following:

declare module 'app2/*';
declare module 'shared/*';
