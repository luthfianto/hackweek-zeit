import { Board } from '@kata-kit/common';
import { Dashboard } from '@kata-kit/dashboard';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RightButton } from '../buttons';
import DatatablePage from '../schedule_list/datatable';

export default class ListStageModule extends React.PureComponent<RouteComponentProps> {
    readonly title = "Schedule List";

    constructor(props: RouteComponentProps) {
        super(props);
    }

    routeChange() {
        this.props.history.push("schedule");
    }

    render() {
        return (
            <Dashboard title={this.title}>
                <Board>
                    <RightButton onClick={this.routeChange.bind(this)} />
                    <br />
                    <DatatablePage />
                </Board>
            </Dashboard>
        );
    }
}
