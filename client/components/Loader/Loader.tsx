import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import {default as BaseLoader} from "@mdoffice/md-component/Loader";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


interface LoaderProps {
    text?: string;
}

const Loader:React.FC<LoaderProps> = (text) => {
    return (
        //@ts-ignore
        <div dangerouslySetInnerHTML={{ __html: BaseLoader(text.length ? text: '') }} />
    );
};

export default Loader;