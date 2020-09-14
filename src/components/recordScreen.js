import Box from '@material-ui/core/Box';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
const emails = ['Do you want to record entire screen', 'Part of a screen'];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <List>
        {emails.map(email => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
      <br />
      <Box mx="auto" pt={15} pl={73}>
      <Button variant="outlined" onClick={handleClickOpen} style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            color: 'white',
            height: 48,
            padding: '0 30px'}}>
        Start
      </Button>
      <Button pt={15} pl={73} style={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            color: 'white',
            height: 48,
            padding: '0 30px',
        }}>Pause</Button>
           <Button style={{
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            color: 'white',
            height: 48,
            padding: '0 30px',
        }} >Stop</Button>
      </Box>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}
