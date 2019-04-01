class Rss {
    idChannel: number;
    title: string;
    description: string;
    urlImage: string;
    urlOrigin: string;
    content: string;
    constructor(idChannel: number, title: string, description: string, urlImage: string, urlOrigin: string, content: string) {
        this.idChannel = idChannel;
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.urlOrigin = urlOrigin;
        this.content = content;
    }
}
