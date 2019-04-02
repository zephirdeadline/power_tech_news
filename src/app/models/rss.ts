export class Rss {
    idChannel: number;
    id: number;
    title: string;
    description: string;
    urlImage: string;
    urlOrigin: string;
    isRead: boolean;
    public constructor(idChannel: number,
                        id: number,
                       title: string,
                description: string,
                urlImage: string,
                urlOrigin: string,
                isRead: boolean = false) {
        this.idChannel = idChannel;
        this.id = id;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.urlOrigin = urlOrigin;
        this.isRead = isRead;
    }
}
