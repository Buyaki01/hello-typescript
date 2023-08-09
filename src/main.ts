// const stringEcho = (arg: string): string => arg //This only accepts data type of string
const echo = <T>(arg: T): T => arg // works with any type we would pass into this function
