import { TopToolbar, ExportButton, useRedirect} from "react-admin";
import {Button} from 'antd';
import { UdvExportIcon } from "./Icons";
import '../css/Common.css';

export const TopBarUsersActions = (props) => {
    const redirect = useRedirect();

    const handleCreateClick = () => {
        redirect(`/employees/create`);
    };
    return (
      <TopToolbar>
          <Button className='create-user-button' onClick={handleCreateClick}>Добавить сотрудника</Button>
          <ExportButton label="" icon={<UdvExportIcon/>}/>
      </TopToolbar>
      );
  };