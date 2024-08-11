// import MDEditor, { commands } from "@uiw/react-md-editor"
import edit_square from "../data/edit_square.svg"
import translate from "../data/translate.svg"

import React, { useState } from "react"
import clear from "../data/clear.svg"
import download from "../data/download.svg"
import zoomInsvg from "../data/zoomInsvg.svg"
import zoomOutsvg from "../data/zoomOutsvg.svg"
import { divToImg } from "../models/divToIng/divtoImg"
import MDEditor, { codeEdit, codeLive, codePreview, commands, getCommands } from "../models/uiw_mdEditor/react-md-editor/src"



export default function MD_EditBox_Custom() {

    const EditorValueKeyWord = "EditorValue"

    const [value, setValue] = React.useState<string>(localStorage.getItem(EditorValueKeyWord) ?? "Hello, World!")
    const [isNineSolsFont, setIsNineSolsFont] = useState<boolean>(false)
    const [isDecodeCangjie, setisDecodeCangjie] = useState<boolean>(true)
    function zoom(zoomIn: boolean) {
        const currentZoom = parseFloat((document.body.style as any).zoom) || 1
        const newZoom = currentZoom + (zoomIn ? 0.1 : -0.1);
        (document.body.style as any).zoom = newZoom.toString()
    }
    const handleEditorChange = (newValue: string = "") => {
        localStorage.setItem(EditorValueKeyWord, newValue)
        setValue(newValue)
    }

    const allCommands = getCommands()

    return (
        <div className="container">
            <MDEditor
                decodeCangjie={isDecodeCangjie}
                value={value}
                onChange={handleEditorChange}
                fullscreen={true}
                commands={[
                    ...allCommands,
                    commands.group([], {
                        name: "clear-value",
                        icon: <img src={clear} alt="clear" height={15} margin-top={2} />,
                        execute: (state, api) => {
                            setValue("")
                        },
                        buttonProps: { "aria-label": "clear-value" }
                    }),
                ]}
                extraCommands={[
                    codeEdit, codeLive, codePreview,
                    commands.divider, 
                    commands.group([], {
                        name: "zoomIn",
                        icon: <img src={zoomInsvg} alt="zoomIn" />, 
                        execute: (
                            state: commands.TextState,
                            api: commands.TextAreaTextApi
                        ) => {
                            zoom(true)
                        },
                        buttonProps: { "aria-label": "zoomIn" }
                    }),
                    commands.group([], {
                        name: "zoomOut",
                        icon: <img src={zoomOutsvg} alt="zoomOut" />, 
                        execute: (
                            state: commands.TextState,
                            api: commands.TextAreaTextApi
                        ) => {
                            zoom(false)
                        },
                        buttonProps: { "aria-label": "zoomOut" }
                    }),
                    commands.group([], {
                        name: "download-img",
                        icon: <img src={download} alt="size" />,
                        execute: (state, api) => {
                            const target = document.querySelector(`.wmde-markdown `) as HTMLElement
                            if (target) {
                                const downloadBtn = document.createElement('a')
                                divToImg.createImage(target, downloadBtn)
                            } else {
                                alert("target not find")
                            }

                        },
                        buttonProps: { "aria-label": "download-img" }
                    }),
                    commands.divider,
                    commands.group([], {
                        name: "update-font-family",
                        icon: <img src={translate} alt="translate" />,
                        execute: (state, api) => {
                            setIsNineSolsFont(!isNineSolsFont)
                            document.documentElement.style.setProperty("--markdown-font", isNineSolsFont ? "NineSols" : "NotoSansTC")
                        },
                        buttonProps: { "aria-label": "update-font-family" }
                    }),
                    commands.group([], {
                        name: "uncode-cangjie",
                        icon: <img src={edit_square} alt="uncode-cangjie" />,
                        execute: (state, api) => {
                            setisDecodeCangjie(!isDecodeCangjie)
                        },
                        buttonProps: { "aria-label": "uncode-cangjie" }
                    })
                ]}
            />
        </div>
    )
}