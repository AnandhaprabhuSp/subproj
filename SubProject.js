import React, { useState } from 'react';
import './subproject.css';
import Dialog from '@material-ui/core/Dialog';
import styles from './styles';
import { withStyles } from '@material-ui/core';

function SubProject({ classes }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Click</button>
      <Dialog onClose={() => setOpen(!open)} open={open} classes={{ root: classes.root }}>
        <div className={classes.main}>

          Display content
        </div>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(SubProject);
