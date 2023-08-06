export interface ProviderResponse {
  providerId: number;
  name: string;
  email: string;
  documentType: string;
  documentNumber: string;
  address: string;
  phone: string;
  auditCrateDate: Date;
  state: number;
  stateProvider: string;
  badgeColor: string;
  icEdit: any;
  icDelete: any;
}
