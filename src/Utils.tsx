const dev_mode = import.meta.env.DEV

export class Stopwatch{
    /**
     * Stopwatch timer for development.
     */
    start_time = performance.now();
    end_time: number|null = null;

    now(){
        /**
         * In production builds, don't call anything. 
         * This should hopefully hint to the ts compiler to remove the dead code
         */
        return dev_mode ? performance.now() : 1
    }
    constructor(){
        this.start_time = this.now()
    }
    begin(){
        this.start_time = this.now()
        return this.start_time
    }
    end(){
        this.end_time = this.now()
        return this.end_time
    }
    get time_taken(): number {
        return this.end_time ?? this.end()
    }

    /**
     * Logs the time taken with a custom message and log level.
     * @param words - The prefix message for the log output. Defaults to "Time taken: "
     * @param level - The log level (debug, log, warn, error). Defaults to "debug"
     */
    log(words= "Time taken: ", level= "debug"){
        if (dev_mode) return;
        const message = words + this.time_taken + " ms"
        switch (level.toLowerCase()) {
            case "debug": console.debug(message); break;
            case "log": console.log(message); break;
            case "warn": console.warn(message); break;
            case "error": console.error(message); break;
            default: console.debug(message); break;
        }
    }
}