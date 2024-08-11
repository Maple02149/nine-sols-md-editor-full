import html2canvas, { Options } from "html2canvas"
import { dateTool } from "../date.tool"

export enum IImageType {
    PNG = "PNG",
    JPG = "JPG",
    PDF = "PDF",
}

class DivToImg {


    imageType: IImageType

    constructor() {
        this.imageType = IImageType.PNG

    }

    createImage(target: HTMLElement, downloadBtn: HTMLAnchorElement): void {
        target.style.backgroundColor = "transparent"
        const image = html2canvas(target, {
            width: undefined,
            height: undefined,
            scale : 50,
            backgroundColor: "transparent"
        }).then((d) => {
            const downloadUrl = d.toDataURL()//link
            divToImg.dataURLtoBlob(downloadUrl)
            downloadBtn.href = downloadUrl
            downloadBtn.download = dateTool().YMDHMS() //file name
            downloadBtn.click()
        })



    }
    dataURLtoBlob(dataUrl: string): Blob {
        const byteString = atob(dataUrl.split(',')[1])
        const mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0]
        const arrayBuffer = new ArrayBuffer(byteString.length)
        const uint8Array = new Uint8Array(arrayBuffer)

        for (let i = 0; i < byteString.length; i++) {
            uint8Array[i] = byteString.charCodeAt(i)
        }

        return new Blob([arrayBuffer], { type: mimeString })
    }
}

export const divToImg = new DivToImg()