export const dev_mode = import.meta.env.DEV

export const isTouchScreen = typeof window !== "undefined" && (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
);

export const tapOrClick = isTouchScreen ? "tap" : "click";
export const tapOrClickCap = isTouchScreen ? "Tap" : "Click";

export class Stopwatch {
    /**
     * Stopwatch timer for development.
     */
    start_time = 0;
    end_time: number|null = null;

    now(): number{
        /**
         * Returns the current time in milliseconds.
         * In production builds, just returns `1` to avoid performance overhead
         */
        return dev_mode ? performance.now() : 1
    }
    constructor(){
        this.start_time = this.now()
    }
    begin(): number{
        this.start_time = this.now()
        return this.start_time
    }
    end(): number{
        this.end_time = this.now()
        return this.end_time
    }
    get time_taken(): number {
        return this.end_time ?? this.end()
    }

    /**
     * Logs the time taken with a custom message and log level.
     * @param msg_prefix - The prefix message for the log output. Defaults to "Time taken: "
     * @param level - The log level (debug, log, warn, error). Defaults to "debug"
     */
    log(msg_prefix= "Time taken: ", level= "debug"){
        if (!dev_mode) return;
        const message = msg_prefix + this.time_taken.toFixed(1) + " ms"
        switch (level.toLowerCase()) {
            case "debug": console.debug(message); break;
            case "log": console.log(message); break;
            case "warn": console.warn(message); break;
            case "error": console.error(message); break;
            default: console.debug(message); break;
        }
    }
}
