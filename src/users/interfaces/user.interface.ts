export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  cats: Cat[];
}

export interface Cat {
  name: string;
  subscriptionActive: boolean;
  breed: string;
  pouchSize: string;
}
