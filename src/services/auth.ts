interface Response {
    token: string;
    user: {
      name: string,
      email: string,
      workspace: string,
      account_type: string,
    };
  }
  
  export function signIn(): Promise<Response> {
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: 'asdihsaoidh123jhu234uj45huj34h5o34u76456534',
                user: {
                    name: 'Admin',
                    email: 'admin@hotmail.com',
                    workspace: 'GERAL',
                    account_type: 'ADMIN'
                }
            })
        }, 1000)
    }
    )
}