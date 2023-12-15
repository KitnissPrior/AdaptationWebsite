import { Layout } from 'react-admin';

import { UdvAppBar } from '../inner-components/UdvAppBar';

export const MyLayout = props => <Layout {...props} appBar={UdvAppBar} />;