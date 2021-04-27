interface Response {
    token: string;
    user: {
        id: string,
        name: string,
        lastName: string,
        email: string,
        workspace: string,
        account_type: string,
        points: number,
    };
  }
  
  export function signIn(): Promise<Response> {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: 'asdihsaoidh123jhu234uj45huj34h5o34u76456534',
                user: {
                    id: "3",
                    name: 'admin',
                    lastName: "Silva",
                    email: 'admin@hotmail.com',
                    workspace: 'GERAL',
                    account_type: 'ADMIN',
                    points: 50670,
                }
            })
        }, 500)
    }
    )
}