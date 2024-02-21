/**
 * An array of routes that accessible to the public
 * this route do not required authenticated
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/new-password"
]

/**
 * An array of routes that are your for authentication
 * this route will redirect user to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
]

/**
 * these prefix for API authentication routes
 * Routes start with this prefix for api authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * the default redirect path after loggin in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";