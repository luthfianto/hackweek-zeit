import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import { InputText } from '@kata-kit/form';
import * as React from 'react';

const title = "Create Stage";

const CreateStageModule = () => (
    <Dashboard title={title}>
        <Board>
            Create stage
            <InputText name="username" placeholder="Username" />
      </Board>
        <Board>
            Keywords
            <p>Fill in words predicition for your stage in your pov</p>

            <Board>
                Keywords
                <InputText name="username" placeholder="Username" />
                <p>key11111111</p>
            </Board>

            <Board>
                Keywords
                <InputText name="username" placeholder="Username" />
                <p>key22222222</p>
            </Board>
        </Board>
    </Dashboard>
);

export default CreateStageModule;
