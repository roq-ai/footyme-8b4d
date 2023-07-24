interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['League Owner'],
  customerRoles: ['Fan'],
  tenantRoles: ['League Owner'],
  tenantName: 'League',
  applicationName: 'footyme',
  addOns: ['chat', 'notifications'],
};
