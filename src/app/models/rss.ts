export class Rss {
    idChannel: number;
    id: number;
    title: string;
    description: string;
    urlImage: string;
    urlOrigin: string;
    isRead: boolean;
    date: string;
    public constructor(idChannel: number,
                       id: number,
                       title: string,
                       description: string,
                       urlImage: string,
                       urlOrigin: string,
                       isRead: boolean = false,
                       date: string = '???') {
        this.idChannel = idChannel;
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.urlOrigin = urlOrigin;
        this.isRead = isRead;
        this.date = date;
    }
}
