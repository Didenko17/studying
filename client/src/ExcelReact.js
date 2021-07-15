import { useState } from 'react'
import readXlsxFile from 'read-excel-file'

export default function ExcelReact(){
    const [data,setData] = useState([])
    function readTable(e){
        const file = e.target.files[0]
        readXlsxFile(file).then((rows) => {
            // `rows` is an array of rows
            // each row being an array of cells.
            setData(rows)
        })
    }
    if(!data.length){
        return <input type="file" onChange={(e)=>readTable(e)} accept=".xlsx"/>
    }
    return(
        <table>
            <thead>
                <tr>
                    {data[0].map((item,index)=><th>{item}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row,index)=>{
                    if(!index) return; 
                    return (
                            <tr key={index}>
                                {row.map(item=><td>{item}</td>)}
                            
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}