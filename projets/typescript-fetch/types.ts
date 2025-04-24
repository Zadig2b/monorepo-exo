
export interface User {
    id: number;
    name: string;
    email: string;
    username: string;
  }
  
  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  