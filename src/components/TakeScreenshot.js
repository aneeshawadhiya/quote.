// import React, { createRef, useState } from 'react'

// import { useScreenshot, createFileName } from 'use-react-screenshot'


// export default function TakeScreenshot() {

//     const ref = createRef(null)
//     const [ image, takeScreenshot ] = useScreenshot()
    
//     const download = (image, { name = "img", extension = "jpg" } = {}) => {
//         const a = document.createElement("a");
//         a.href = image;
//         a.download = createFileName(extension, name);
//         a.click();
//     };
    
//     const getImage = () => {
//         takeScreenshot(ref.current).then(download);
//     }
// }
