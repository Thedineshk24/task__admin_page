import React from 'react'
import { Col, Row } from 'antd';
import "../styles/row.css";

const RowComp = () => {
  return (
    <div className='row'>
        <Row gutter={16} wrap style={{backgroundColor : "#FFF", width: "100%"}}>
          <Col span={4}>
            <p className='row__text'>Event Type</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>Event ID</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>Event date and time</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>Time in Queue</p>
          </Col>
          <Col span={2}>
            <p className='row__text'>Max HR</p>
          </Col>
          <Col span={2}>
            <p className='row__text'>Patient Name</p>
          </Col>
          <Col span={2}>
            <p className='row__text'>Age</p>
          </Col>
          <Col span={2}>
            <p className='row__text'>Gender</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>Atrial Fibrillation {'>'}= 30 seconds</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>43215-002</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>13 Feb 12:49:26 PM (CST)</p>
          </Col>
          <Col span={4}>
            <p className='row__text'>07:39 (m:s)</p>
          </Col>
          <Col span={2}>
            <p className='row__text'>
              93 BPM
            </p>
          </Col>
          <Col span={2}>
            <p className='row__text'>
              Sathish Kumar
            </p>
          </Col>
          <Col span={2}>
            <p className='row__text'>
              34
            </p>
          </Col>
          <Col span={2}>
            <p className='row__text'>
              Male
            </p>
          </Col>
        </Row>
    </div>
  )
}

export default RowComp