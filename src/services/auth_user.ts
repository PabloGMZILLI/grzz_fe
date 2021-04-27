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
                    id: "4",
                    name: 'user',
                    lastName: "santos",
                    email: 'user@hotmail.com',
                    workspace: 'GERAL',
                    account_type: 'USER',
                    points: 580
                }
            })
        }, 500)
    }
    )
}