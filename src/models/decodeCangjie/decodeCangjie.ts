

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
        const responseCangjie = await fetch(process.env.PUBLIC_URL + "/CNS_cangjie.json")
        const dataCangjie = await responseCangjie.json()
        const responseBMO = await fetch(process.env.PUBLIC_URL + "/Unicode_BMP.json")
        const dataBMO = await responseBMO.json()
        this.cangjieData = dataCangjie
        this.uncode_BMP = dataBMO
    }


    private isChinese(text: string) {
        return {
            isChinese: /[\u4E00-\u9FFF]/.test(text),
            code: text.charCodeAt(0).toString(16).toUpperCase()
        }
    }

    decode(inputValue: string): string {
        const decode = inputValue.split("").map((v) => {
            const check = this.isChinese(v)
            if (check.isChinese) {
                const uncode = this.uncode_BMP.find((f) => { return f.value === check.code })
                const cangjie = this.cangjieData.find((f) => { return f.key === uncode?.key })
                return cangjie?.value ? `${cangjie?.value} ` : v
            } else {
                return v
            }
        }).join("") 
        return decode
    }

}

export const decodeCangjie = new DecodingCangjie()
