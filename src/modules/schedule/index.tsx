import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import { InputText } from '@kata-kit/form';
import * as React from 'react';

localStorage.setItem("konten", "peleeeer 123")

const ScheduleModule = () => (
  <Dashboard title="Create a schedule">
    <Board>
      Create a schedule
    </Board>
    <br/>
    <Board>
      Search speaker
      <InputText name="username" placeholder="Username" />
    </Board>
    <br/>
    <Board>
      Search stage
    </Board>
    <br/>
    <Board>
      Keywords
    </Board>
    <br/>
  </Dashboard>
);

export default ScheduleModule;
