export const layoutInitialState = {
    themeMode : "light",
    showMessage : false,
}

export const LIGHT_MODE = 'LIGHT_MODE';
export const DARK_MODE = 'DARK_MODE';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export const lightModeRequest = () => ({
    type : LIGHT_MODE
});

export const darkModeRequest = () => ({
    type : DARK_MODE
});

export const showMessageRequest = () => ({
    type : SHOW_MESSAGE
});

export const hideMessageRequest = () => ({
    type : HIDE_MESSAGE
})

export const layoutReducer = (state = layoutInitialState, action:any) =>
{
    switch (action.type) {
        case LIGHT_MODE : {
            return {
                ...state,
                themeMode : "light",
            }
        }
        case DARK_MODE : {
            return {
                ...state,
                themeMode : "dark",
            }
        }
        case SHOW_MESSAGE : {
            return {
                ...state,
                showMessage : true,
            }
        }
        case HIDE_MESSAGE : {
            return {
                ...state,
                showMessage : false,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
}