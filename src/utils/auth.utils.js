import { parseCookies, destroyCookie, setCookie as setNookie } from "nookies";

export const setCookie = (name, value, params = {}) => {
	setNookie(null, name, value, { path: "/", ...params });
};
export const getCookie = name => {
	return parseCookies()[name];
};
export const universalAtob = b64Encoded => {
	try {
		return atob(b64Encoded);
	} catch {
		return Buffer.from(b64Encoded, "base64").toString();
	}
};
export const GetTokenExpireTime = token => {
	const hash = token?.split(".");
	const result = JSON.parse(universalAtob(hash[0]));
	return new Date(result * 1000);
};
export const setToken = token => {
	// const tokenExpires = GetTokenExpireTime(token);
	setCookie("token", token);
	window.location.href = '/';
};

export const logout = (token) => {
	destroyCookie(null, token)
}