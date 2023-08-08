import { HttpHeaders } from "@angular/common/http";

export const endpoint = {
  // CATEGORY MODULE:
  LIST_CATEGORIES: "Category",
  LIST_SELECT_CATEGORIES: "Category/Select",
  CATEGORY_BY_ID: "Category/",
  CATEGORY_REGISTER: "Category/Register",
  CATEGORY_EDIT: "Category/Edit/",
  CATEGORY_REMOVE: "Category/Remove/",

  // AUTH MODULE:
  LOGIN: "Auth/Login",
  LOGIN_GOOGLE: "Auth/LoginWithGoogle",

  // PROVIDER MODULE:
  LIST_PROVIDERS: "Provider",
  PROVIDER_REGISTER: "Provider/Register",
  PROVIDER_EDIT: "Provider/Edit/",
  PROVIDER_BY_ID: "Provider/",

  // DOCUMENTTYPE MODULE:
  LIST_DOCUMENT_TYPES: "DocumentType",
};

export const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};
