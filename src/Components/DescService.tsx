import { ReactNode } from "react";

interface Props{
    service:ReactNode;
    description:ReactNode;
}

function DescService ({service,description}:Props){
    return(
        <div>
            <div>
                {service}
            </div>
            <div>
                {description}
            </div>
        </div>
    );
};

export default DescService;