import { ReactNode } from "react";

interface Props{
    icon:ReactNode;
    service:ReactNode;
}

function Service ({icon,service}:Props){
    return(
        <div>
            <div>
                {icon}
            </div>
            <div>
                {service}
            </div>
        </div>
    );
};

export default Service;