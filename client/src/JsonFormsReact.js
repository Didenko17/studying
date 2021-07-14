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
    useEffect( async()=>{
        //Тут надо сходить за схемой на сервак, а пока сходим в соседнюю папку
        setJsonSchema(schema)    
    },[])
    return (
        <div style={{width:'50vw', margin:'0 auto'}}>
            <JsonForms
                schema={jsonSchema}
                //uischema={uischema} тут может быть uischema, о которой я спрашивал
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, _errors }) => setData(data)}
            />
        </div>
    );
}
