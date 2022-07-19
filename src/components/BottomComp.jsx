import React from 'react';
import { Select } from 'antd';

import "../styles/bottom.css";
import { Boxes } from './SelectBoxes';

const { Option, OptGroup } = Select;

const BottomComp = () => {
    return (
        <>
            <div className="bottom__comp">
                <div className='boxes'>
                    Measurement
                    HR <input /> BPM
                </div>
                <div className='boxes'>
                    PRI <input /> sec
                </div>
                <div className='boxes'>
                    QRS <input /> sec
                </div>
                <div className='boxes'>
                    QTI <input /> sec
                </div>
            </div>

            <div className="bottom__comp">
                <div className='boxes2'>
                    Finding  <Boxes name="Select" />
                </div>
                <div className='boxes2'>
                    Ectopy  <Boxes name="Select" />
                </div>
            </div>

            <div className="bottom__comp">
                <div className='boxes3'>
                    Comments  <textarea rows={4} cols={5}/>
                </div>
            </div>
        </>
    )
}

export default BottomComp