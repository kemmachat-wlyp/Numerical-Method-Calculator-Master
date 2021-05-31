import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { config } from './swagger_config'

class Swagger extends React.Component{
    render(){
        return(
            <div>
            <SwaggerUI spec={config} />
            </div>
        );
    }
}

export default Swagger