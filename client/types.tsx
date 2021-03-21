export interface EntryT {
    id: number;
    entry_word: string;
}

export type RootStackParamList = {
    EntryList: any;
    EntryDetail: { entry: EntryT };
};

