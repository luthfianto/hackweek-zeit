import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import { InputText } from '@kata-kit/form';
import * as React from 'react';
import { RightButton } from '../buttons';

// import {  } from '@kata-kit/fonts';

localStorage.setItem("konten", "peleeeer 123")

export default function CreateScheduleModule() {
  const title = "Event Schedule";
  return (
    <Dashboard title={title}>
      <Board>
        Create a schedule
      </Board>
      <br />
      <Board>
        Search speaker
      <InputText name="username" placeholder="Username" />
      </Board>
      <br />
      <Board>
        Search stage
    </Board>
      <br />
      <Board>
        Keywords
    </Board>
      <br />
    <RightButton text="Submit" />
    </Dashboard>
  );
}
