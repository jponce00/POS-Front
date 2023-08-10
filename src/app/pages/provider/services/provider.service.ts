import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endpoint } from "@shared/apis/endpoints";
import {
  BaseApiResponse,
  BaseResponse,
} from "@shared/models/base-api-response.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment as env } from "src/environments/environment";
import {
  ProviderById,
  ProviderResponse,
} from "../models/provider-response.interface";
import { getIcon } from "@shared/functions/helpers";
import { ProviderRequest } from "../models/provider-request.interface";
import { AlertService } from "@shared/services/alert.service";

@Injectable({
  providedIn: "root",
})
export class ProviderService {
  constructor(private _http: HttpClient, private _alert: AlertService) {}

  providerById(providerId: number): Observable<ProviderById> {
    const requestUrl = `${env.api}${endpoint.PROVIDER_BY_ID}${providerId}`;

    return this._http.get(requestUrl).pipe(
      map((resp: BaseResponse) => {
        return resp.data;
      })
    );
  }

  GetAll(
    size: string,
    sort: string,
    order: string,
    page: number,
    getInputs: string
  ): Observable<BaseApiResponse> {
    const requestUrl = `${env.api}${
      endpoint.LIST_PROVIDERS
    }?records=${size}&sort=${sort}&order=${order}&page=${page + 1}${getInputs}`;

    return this._http.get<BaseApiResponse>(requestUrl).pipe(
      map((resp) => {
        resp.data.items.forEach((prov: ProviderResponse) => {
          switch (prov.state) {
            case 0:
              prov.badgeColor = "text-gray bg-gray-light";
              break;
            case 1:
              prov.badgeColor = "text-green bg-green-light";
              break;
            default:
              prov.badgeColor = "text-gray bg-gray-light";
              break;
          }

          prov.icEdit = getIcon("icEdit", "Editar proveedor", true);
          prov.icDelete = getIcon("icDelete", "Eliminar proveedor", true);
        });

        return resp;
      })
    );
  }

  providerRegister(provider: ProviderRequest): Observable<BaseResponse> {
    const requestUrl = `${env.api}${endpoint.PROVIDER_REGISTER}`;

    return this._http.post(requestUrl, provider).pipe(
      map((resp: BaseResponse) => {
        return resp;
      })
    );
  }

  providerEdit(
    providerId: number,
    provider: ProviderRequest
  ): Observable<BaseResponse> {
    const requestUrl = `${env.api}${endpoint.PROVIDER_EDIT}${providerId}`;

    return this._http.put<BaseResponse>(requestUrl, provider);
  }

  providerRemove(providerId: number): Observable<void> {
    const requestUrl = `${env.api}${endpoint.PROVIDER_REMOVE}${providerId}`;

    return this._http.put(requestUrl, "").pipe(
      map((resp: BaseResponse) => {
        if (resp.isSuccess) {
          this._alert.success("Excelente", resp.message);
        }
      })
    );
  }
}
