import React from 'react';
import './home.page.scss';
import { Addtask } from '../../components';

export default function Home(): React.ReactElement {
  return (
    <>
        <div>
            <Addtask />
        </div>
    </>
  );
}
