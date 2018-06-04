declare module '*.css' {
    const styles: any;
    export = styles;
}

declare module '*.scss' {
    const styles: any;
    export = styles;
}

declare module '*.less' {
    const styles: any;
    export = styles;
}

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
    { [P in U]: never } & { [x: string]: never })[T];

type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;
