import { TopToolbar, ExportButton, useRedirect} from "react-admin";
import {Button} from 'antd';
import { UdvExportIcon } from "./Icons";
import '../css/Common.css';
import { UdvDarkCyan, LightGreen, DarkDarkCyan, UdvCyan } from "../css/Colors";

export const TopBarUsersActions = (props) => {
    const redirect = useRedirect();

    const handleCreateClick = () => {
        redirect(`/employees/create`);
    };
    return (
      <TopToolbar className="tool-bar-users">
          <Button onClick={handleCreateClick}
            style={{
                float: 'right',
                height: 'fit-content',
                width: 'fit-content',
                fontSize: '30',
                color: DarkDarkCyan,
                borderColor: UdvDarkCyan,
                textTransform: 'none',
                fontFamily:'Golos, Helvetica, Arial, sans-serif',
                ':hover': {
                    border: '0',
                }
            }}
          >Добавить сотрудника</Button>
          <ExportButton label="" icon={<UdvExportIcon/>}/>
      </TopToolbar>
      );
  };