export interface EntryT {
    id: number;
    title: string;
    info?: string;
}

export type RootStackParamList = {
    EntryList: any;
    EntryDetail: { entry: EntryT };
};

