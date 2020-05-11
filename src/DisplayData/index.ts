export * from './DisplayData'

interface DisplayDataProps {
    data : {
        name: String,
        alias: String[],
        powers: String[],
        rating: Number,
    }
}

declare module '.'{
    export const DisplayData: React.FC<DisplayDataProps>
}