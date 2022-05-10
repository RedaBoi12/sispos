export interface Client {
    id?: number,
    firstname: string,
    lastname: string,
    email: string,
    mobile: string,
    joinedin: string,
    avatar: string,
    plan: string,

    ccnumber: string,
    ccv: number,
    expiry: string,
    type: string,

    locationstreet: string,
    locationcity: string,
    locationcountry: string,

    isActive: boolean
}
