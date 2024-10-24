export interface Tags {
    category: string;
    status: string;
    type: string;
}

export interface Member {
    name: string;
    studentId: string;
    role: string;
}

export interface Contacts {
    ig: string;
    line: string;
    facebook: string;
}

export interface Club {
    name: string;
    header: string;
    tags: Tags;
    members: Member[];
    contacts: Contacts;
}

export interface Feed {
    clubId: string;
    date: string;
    imageURL: string;
    name: string;
    header: string;
}

export type FeedMemos = Feed[];
export type ClubMemos = Club[];