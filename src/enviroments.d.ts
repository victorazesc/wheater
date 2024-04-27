declare global {
    namespace NodeJS {
        interface ProcessEnv {
        REACT_APP_OPENWEATHER_API_KEY: string
        REACT_APP_GOOGLE_MAPS_API_KEY: string
        REACT_APP_SENTRY_URL: string
    }
}
  }

export { };
