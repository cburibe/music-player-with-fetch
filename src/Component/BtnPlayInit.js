import React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import "../Style/BtnPlayInit.css"


const BtnPlayInit = (props) => {

    return (
            <div className='row'>
                <div className="col d-flex justify-content-end">
                    <button onClick={()=> {props.playPause();}} className='btn btn-success text-dark rounded-circle px-2 py-1'>
                        <BsFillPlayFill />
                    </button>
                    {/* Me falta hacer funcionar el btn, importar funcion de Componente Control */}
                </div>
            </div>
    );
};

export default BtnPlayInit;