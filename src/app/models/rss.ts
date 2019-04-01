export class Rss {
    idChannel: number;
    title: string;
    description: string;
    urlImage: string;
    urlOrigin: string;
    content: string;
    isRead: boolean;
    public constructor(idChannel: number,
                title: string,
                description: string,
                urlImage: string,
                urlOrigin: string,
                content: string,
                isRead: boolean) {
        this.idChannel = idChannel;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.urlOrigin = urlOrigin;
        this.content = content;
        this.isRead = isRead;
    }
}
