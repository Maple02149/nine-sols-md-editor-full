import dataCangjie from "../../data/CNS_cangjie.json"
import dataBMO from "../../data/Unicode_BMP.json"

interface ICangjieJsonFile {
    key: string,
    value: string
}
class DecodingCangjie {
    cangjieData: ICangjieJsonFile[]
    uncode_BMP: ICangjieJsonFile[]

    constructor() {
        this.cangjieData = []
        this.uncode_BMP = []
        this.init()

    }

    async init() {
        this.cangjieData = dataCangjie as ICangjieJsonFile[]
        this.uncode_BMP = dataBMO as ICangjieJsonFile[]
    }


    isChinese(text: string) {
        return {
            isChinese: /[\u4E00-\u9FFF]/.test(text),
            code: text.charCodeAt(0).toString(16).toUpperCase()
        }
    }

    decode(inputValue: string, toUppercase: boolean): string {
        const decode = inputValue.split("").map((v) => {
            const check = this.isChinese(v)
            if (check.isChinese) {
                const uncode = this.uncode_BMP.find((f) => { return f.value === check.code })
                const cangjie = this.cangjieData.find((f) => { return f.key === uncode?.key })
                return cangjie?.value ? `${toUppercase ? cangjie.value.toUpperCase() : cangjie.value.toLowerCase()} ` : v
            } else {
                return v
            }
        }).join("")
        return decode
    }

}

export const decodeCangjie = new DecodingCangjie()
