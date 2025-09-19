const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getServices() {
  const res = await fetch(`${API_URL}/api/services`);
  return await res.json();
}

export async function getServicesNow() {
  const res = {

"data": [

{

"id": 2,

"documentId": "edst99y5ktgvgjh591iub36g",

"title": "M-Service",

"description": "KRA M-Service is a mobile platform by the Kenya Revenue Authority that allows taxpayers to conveniently access core tax services via their mobile phones. It supports PIN registration, filing returns, tax payments, account status checks, and access to tax compliance certificates.",

"slug": "kra-m-service",

"icon": "faMobile",

"category": "business",

"isQuickLink": false,

"externalUrl": "https://kra.go.ke/en/m-service",

"order": 1,

"isActive": true,

"createdAt": "2025-09-10T06:25:36.095Z",

"updatedAt": "2025-09-10T06:25:38.594Z",

"publishedAt": "2025-09-10T06:25:38.629Z"

},

{

"id": 4,

"documentId": "s4rl7mwh4nv7gojo6e6vl0uw",

"title": "iCMS",

"description": "Integrated Customs Management System (iCMS) is KRA's modern, efficient digital platform for customs operations—including cargo clearance, pre-arrival processing, risk management, and real-time tracking. It replaces the older SIMBA platform and streamlines customs procedures for importers, exporters, and agents.",

"slug": "icms",

"icon": "faShippingFast",

"category": "business",

"isQuickLink": false,

"externalUrl": "https://icms.kra.go.ke/",

"order": 2,

"isActive": true,

"createdAt": "2025-09-10T06:30:56.994Z",

"updatedAt": "2025-09-10T06:30:59.044Z",

"publishedAt": "2025-09-10T06:30:59.059Z"

},

{

"id": 6,

"documentId": "sc1ajqv1ssl7y6u5kljhzgqk",

"title": "E-Slip Generation",

"description": "E-Slips are electronic payment reference slips generated via iTax or M-Service, enabling taxpayers to pay taxes (e.g., Presumptive Tax, domestic taxes). The E-Slip is sent via email and can be used to pay through mobile money or banks.",

"slug": "e-slip",

"icon": "faFileInvoiceDollar",

"category": "business",

"isQuickLink": true,

"externalUrl": "https://itax.kra.go.ke/",

"order": 3,

"isActive": true,

"createdAt": "2025-09-10T06:32:05.228Z",

"updatedAt": "2025-09-10T06:32:07.108Z",

"publishedAt": "2025-09-10T06:32:07.127Z"

},

{

"id": 8,

"documentId": "js5heptr9zhne88wntofp7jo",

"title": "iTax",

"description": "iTax (Integrated Tax Management System) enables taxpayers to manage core tax functions online—filing returns, generating E-Slips, applying for PINs, tax payments, retrieving TCCs, and more.",

"slug": "itax",

"icon": "faFileAlt",

"category": "business",

"isQuickLink": true,

"externalUrl": "https://itax.kra.go.ke/",

"order": 1,

"isActive": true,

"createdAt": "2025-09-10T06:33:06.488Z",

"updatedAt": "2025-09-10T06:33:08.204Z",

"publishedAt": "2025-09-10T06:33:08.220Z"

},

{

"id": 10,

"documentId": "p5d3uzlx90c8nat2et1rvfx5",

"title": "iBid – Customs Auction",

"description": "iBid is KRA’s online customs auction platform where bidders can participate in public auctions of abandoned goods. Users log in with their KRA PIN and iTax credentials to bid and, if successful, receive a PRN to complete payment.",

"slug": "ibid",

"icon": "faGavel",

"category": "business",

"isQuickLink": true,

"externalUrl": "https://ibid.kra.go.ke/",

"order": 4,

"isActive": true,

"createdAt": "2025-09-10T06:34:20.559Z",

"updatedAt": "2025-09-10T06:34:25.497Z",

"publishedAt": "2025-09-10T06:34:25.512Z"

}

],

"meta": {

"pagination": {

"page": 1,

"pageSize": 25,

"pageCount": 1,

"total": 5

}

}

}

return res;
}


