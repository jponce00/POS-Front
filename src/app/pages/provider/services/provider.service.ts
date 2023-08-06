import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { endpoint } from "@shared/apis/endpoints";
import { BaseApiResponse } from "@shared/models/base-api-response.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment as env } from "src/environments/environment";
import { ProviderResponse } from "../models/provider-response.interface";
import { getIcon } from "@shared/functions/helpers";

@Injectable({
  providedIn: "root",
})
export class ProviderService {
  constructor(private _http: HttpClient) {}

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

          prov.icEdit = getIcon("icEdit", "Editar proveedor", true, "edit");
          prov.icDelete = getIcon(
            "icDelete",
            "Eliminar proveedor",
            true,
            "remove"
          );
        });

        return resp;
      })
    );
  }
}
