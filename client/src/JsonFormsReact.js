import {useEffect, useState} from 'react'
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import {schema} from './schemas/schema'
import { uischema } from './schemas/uischema';

export default function JsonFormsReact() {
    const [jsonSchema,setJsonSchema] = useState({});
    const [data, setData] = useState({});
    useEffect(()=>{
        return async()=>{
            //Тут надо сходить за схемой на сервак, а пока сходим в соседнюю папку
            setJsonSchema(schema)
        }    
    },[])
    function submit(){
        console.log(data)
    }
    return (
        <div className="form">
            <JsonForms
                schema={jsonSchema}
                //тут может быть uischema, о которой я спрашивал
                //uischema={uischema} 
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, _errors }) => setData(data)}
            />
            <button className="submit" onClick={()=>submit()}>Submit</button>
        </div>
        
    );
}
