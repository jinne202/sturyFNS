export const userInitialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingIn: false, //로그인 시도
    myAccountInfo: null, //본인 정보
    isSigningUp: false, // 회원가입 시도
    isSignedUp: false, // 회원가입 여부
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const loginRequestAction = (data: any) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const userReducer = (state = userInitialState, action: any) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggingIn: true,
                isLoggedIn: false,
                myAccountInfo: null,
            };
        }

        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                myAccountInfo: action.data,
            };
        }

        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
                myAccountInfo: null,
            };
        }

        default:
            return state;
    }
};
