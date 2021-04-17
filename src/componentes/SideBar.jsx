import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';
import BarChartIcon from '@material-ui/icons/BarChart';

function SideBar() {
    return (
        <div>
            <ListItem button component={NavLink} to="/dashboard">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button component={NavLink} to="/ativos">
                <ListItemIcon>
                    <ViewListIcon />
                </ListItemIcon>
                <ListItemText primary="Ativos" />
            </ListItem>

            <ListItem button component={NavLink} to="/relatorios">
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Relatórios" />
            </ListItem>
        </div>
    )
}

export default SideBar