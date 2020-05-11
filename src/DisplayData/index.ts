export { DisplayData } from './DisplayData'

interface DisplayDataProps {
    name: String,
    alias: String[],
    powers: String[],
    rating: Number,
}

declare module '.'{
    export const DisplayData: React.FC<DisplayDataProps>
}