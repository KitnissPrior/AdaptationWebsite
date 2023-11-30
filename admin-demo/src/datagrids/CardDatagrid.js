import { Card, Col, Row } from 'antd';
import React from 'react';

export default function CardDatagrid(props) {

    const cards = props.data.map((item) =>
        <React.Fragment key={item.id}>
            <Col span={8}>
                <Card title={item.title}>
                {item.id}
                </Card>
            </Col>
        </React.Fragment>);

    return cards;

};
