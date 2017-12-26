import React from 'react';
import AppBar from 'material-ui/AppBar';
import { purple900, brown100 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: purple900
  },
  appBar: {
    height: 50
  }
});

class HeaderNavigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle() { this.setState({ open: !this.state.open }); }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            onLeftIconButtonClick={() => this.handleToggle()}
            style={{ position: 'fixed', top: '0px' }}
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={() => this.handleToggle()}
            containerStyle={{ backgroundColor: brown100 }}
          >
            <MenuItem
              primaryText="Home"
              leftIcon={<FontIcon className="material-icons">home</FontIcon>}
              href="#root"
              onClick={() => !this.handleClose()}
            />
            <MenuItem
              primaryText="About Me"
              leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>}
              href="#about"
              onClick={() => !this.handleClose()}
            />
            <MenuItem
              primaryText="Education"
              leftIcon={<FontIcon className="material-icons">account_balance</FontIcon>}
              href="#education"
              onClick={() => !this.handleClose()}
            />
            <MenuItem
              primaryText="Skills"
              leftIcon={<FontIcon className="material-icons">important_devices</FontIcon>}
              href="#skills"
              onClick={() => !this.handleClose()}
            />
            <MenuItem
              primaryText="Contact"
              leftIcon={<FontIcon className="material-icons">settings_phone</FontIcon>}
              href="#contact"
              onClick={() => !this.handleClose()}
            />
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default HeaderNavigation;
