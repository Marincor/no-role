export interface PhotoPlacesModel {
    image: {
        height: number,
        url: string,
        width: number
    },
    page: string,
    proxyImage: string,
    thumbnails: Array<PhotoPlacesModel['image']>,
    title: string,
    type: string,
    message?: string
}