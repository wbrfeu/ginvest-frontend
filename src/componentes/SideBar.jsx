import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import BarChartIcon from '@material-ui/icons/BarChart';
import { rotaDashboard, rotaMeusInvest, rotaRelatorios } from '../constantes/rotas';

function SideBar() {
    return (
        <div>
            <ListItem button component={NavLink} to = {rotaDashboard}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button component={NavLink} to = {rotaMeusInvest}>
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Meus Investimentos" />
            </ListItem>

            <ListItem button component={NavLink} to = {rotaRelatorios}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Relatórios" />
            </ListItem>
        </div>
    )
}

export default SideBar