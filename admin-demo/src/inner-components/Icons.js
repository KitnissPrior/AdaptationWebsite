import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import GetAppIcon from '@mui/icons-material/GetApp';
import { UdvCyan } from '../css/Colors';
import logoUdvWhite from '../logoUdvWhite.png'


export const UdvEditIcon = () => <ModeEditOutlineIcon style={{color: UdvCyan}}/>;

export const UdvExportIcon = () => <GetAppIcon style={{color: UdvCyan}}/>;

export const UdvLogoIcon = () => 
    <>
        <img src={logoUdvWhite} alt="udv|group" 
            style={{ marginBottom: '-8px', width: '166px', height:'32px' }}
        />
    </>;

