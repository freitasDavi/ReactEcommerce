import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"

export const login = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const response = await publicRequest.post("/auth/login", user);

        dispatch(loginSuccess(response));
    } catch (err) {
        dispatch(loginFailure());
    }
}