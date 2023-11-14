
type Result =
     { error: boolean, data: any }

function createUser(data: any): Result {
    try {
    } catch {
        return { error, data}
    }
}

// The calling code:
const userResult: Result = createUser({ hello: 'world' });

if (userResult.error) {
    console.error(`Failed to create user: ${userResult.error}`);
    return;
}
