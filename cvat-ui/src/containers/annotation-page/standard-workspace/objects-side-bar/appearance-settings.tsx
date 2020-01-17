import React from 'react';
import { connect } from 'react-redux';

import AppearanceSettingsComponent from 'components/annotation-page/standard-workspace/objects-side-bar/appearance-settings';

interface StateToProps {

}

interface DispatchToProps {

}

function mapStateToProps(): StateToProps {
    return {};
}

function mapDispatchToProps(): DispatchToProps {
    return {};
}

function AppearanceSettingsContainer(props: StateToProps & DispatchToProps): JSX.Element {
    return (
        <AppearanceSettingsComponent {...props} />
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppearanceSettingsContainer);
