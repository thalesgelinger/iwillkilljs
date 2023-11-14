type ActionTypes =
    { action: 'A'; value: boolean }
    | { action: 'B'; value: { b: number} }

const guard = (_: never) => {
    throw new Error('Test');
};

const reducer = (action: ActionTypes) => {
    switch (action.action) {
        case "A":
            console.log(action.value)
            break;
        case "B":
            console.log(action.value.b)
            break;
        default:
            guard(action);
    }
};


const someAction = (): ActionTypes =>({
    action:"B",
    value: false
}) 
